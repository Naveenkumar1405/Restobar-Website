from fastapi import FastAPI, Depends, HTTPException
from fastapi.security.api_key import APIKeyHeader
import uvicorn, Models, json, pyrebase,time
import paho.mqtt.client as mqtt 

API_KEY = "XXX"
api_key_header = APIKeyHeader(name="X-Api-Key", auto_error=False)

app = FastAPI(
    title="Onwords Master API",
    description="Only API for accessing all Onword's Devices !",
    version="1.0.0",
)
config = {
  "apiKey": "AIzaSyC2psok5Y20qJvtXjiPZEDQYbGkitdwk0M",
  "authDomain": "smart-things-ab7d2.firebaseapp.com",
  "databaseURL": "https://smart-things-ab7d2-default-rtdb.firebaseio.com",
  "projectId": "smart-things-ab7d2",
  "storageBucket": "smart-things-ab7d2.appspot.com",
  "messagingSenderId": "928008787147",
  "appId": "1:928008787147:web:a4e37aca5a8a4fb186b74e"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
auth = firebase.auth()

Userdata=db.child("Users").get().val()
Homedata=db.child("Homes").get().val()
deviceid=[]

@app.post("/create_account",
          operation_id="Create User Account",
          tags=["User Management"],
          summary="Create a new user using Email and Password",
          description="User account creation")

def create_account(user: Models.CreateUser):
    email = user.email
    password = user.password
    try:
        user_data = auth.create_user_with_email_and_password(email, password)
        uid = user_data['localId']
        return {"message": "Account created successfully", "uid": uid}
    except Exception as e:
        return {"error": str(e)}

@app.post("/user_login",
        operation_id="User Login",
        tags=["User Login"],
        summary="Login using Email and Password",
        description="Login Credentials")

def user_login(login: Models.Login):
    email = login.email
    password = login.password
    user_role = login.user_role
    try:
        login_data = auth.sign_in_with_email_and_password(email, password,user_role)
        uid = login_data['localId']
        return uid
    except Exception as e:
        return e

@app.post("/create_guest",
          operation_id="Create Guest User",
          tags=["User Management"],
          summary="Create a new guest user",
          description="Guest account creation by owner")

def create_guest(guest: Models.CreateGuest):
    email = guest.email
    password = guest.password
    owner_email = guest.owner_email
    try:
        guest_data = auth.create_user_with_email_and_password(email, password)
        uid = guest_data['localId']
        return {"message": "Guest account created successfully", "uid": uid}
    except Exception as e:
        return {"error": str(e)}

@app.delete("/delete_guest",
            operation_id="Delete Guest User",
            tags=["User Management"],
            summary="Delete a guest user",
            description="Guest account deletion by owner")

def delete_guest(uid: str, owner_email: str):
    try:
        # Validate that the requester is the owner
        # Delete the guest account
        auth.delete_user(uid)
        return {"message": "Guest account deleted successfully"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/view_guests",
         operation_id="View Guest Users",
         tags=["User Management"],
         summary="View all guest users created by owner",
         description="Viewing guest accounts by owner")

def view_guests(owner_email: str):
    try:
        # Query your database to get all guest UIDs created by this owner
        # Return the guest list
        return {"guests": "guest_list_here"}
    except Exception as e:
        return {"error": str(e)}
        
@app.post("/guest_login",
        operation_id="Guest User Login",
        tags=["User Login"],
        summary="Login using Email and Password and Owner's Email who owns the product and allowed guest to use their products",
        description="Login Credentials for Guest user")

def guest_login(guest_login: Models.guest_Login):
    email = guest_login.email
    password = guest_login.password
    owner_email = guest_login.owner_email
    try:
        login_data = auth.sign_in_with_email_and_password(email, password,owner_email)
        uid = login_data['localId']
        return uid
    except Exception as e:
        return e    

@app.get("/protected-route", response_model=dict,
        tags=["User Login"],
        )
async def protected_route(api_key: str = Depends(api_key_header)):
    if api_key != API_KEY:
        raise HTTPException(status_code=403, detail="API key is invalid")
    return {"message": "This is a protected route"}

@app.get("/get_all_device_state",
        operation_id="Get all device details of the Client",
        tags=["Get Device Details"],
        summary="Get Data",
        description="You can fetch all details of the devices subjected to the Client.")

def get_all_device_state():
    """Using Product_id and Device_id, you can get the status of all Devices
    """
    Userdata=db.child("Users").get().val()
    Homedata=db.child("Homes").get().val()
    try:
        for uid in Userdata:
            try:
                if Homedata[uid]:
                    for homeid in Homedata[uid]:
                        try:
                            for roomid in Homedata[uid][homeid]["rooms"]:
                                try:
                                    for productid in Homedata[uid][homeid]["rooms"][roomid]["products"]:
                                        try:
                                            for data in Homedata[uid][homeid]["rooms"][roomid]["products"][productid]["devices"]:
                                                deviceid.append({"id":Homedata[uid][homeid]["rooms"][roomid]["products"][productid]["devices"][data]["id"],"name":Homedata[uid][homeid]["rooms"][roomid]["products"][productid]["devices"][data]["name"],
                                                                "productid":productid})
                                        except Exception as e:
                                            pass
                                except Exception as e:
                                    pass
                        except Exception as e:
                            pass
            except:
                deviceid = []
                try:
                    for ownerid in Userdata[uid]["Access"]:
                        for houseid in Userdata[uid]["Access"][ownerid]:
                            for roomid in Userdata[uid]["Access"][ownerid][houseid]["rooms"]:
                                for productidall in Userdata[uid]["Access"][ownerid][houseid]["rooms"][roomid]["products"]:
                                    for idall in Userdata[uid]["Access"][ownerid][houseid]["rooms"][roomid]["products"][productidall]:
                                        try:
                                            homedata_owner = Homedata.get(ownerid, {})
                                            for homeid, home_data in homedata_owner.items():
                                                for room_id, room_data in home_data.get("rooms", {}).items():
                                                    for device_data in room_data.get("products", {}).get(productidall, {}).get("devices", {}).values():
                                                        if device_data["id"] == idall:
                                                            deviceid.append({
                                                                "id": device_data["id"],
                                                                "name": device_data["name"],
                                                                "productid": productidall
                                                            })
                                        except Exception as e:
                                            pass
                except Exception as e:
                        pass
                                                
    except Exception as e:
        pass

    
    device_id=[]
    product_id=[]
    
    for i in device_id:
        device_id.append(i["id"])
        product_id.append(i["productid"])
        





if __name__ == "__main__":
    uvicorn.run(app, host="192.168.1.30", port=8000)

