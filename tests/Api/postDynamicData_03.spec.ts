import {test , expect} from "@playwright/test";
import {faker} from "@faker-js/faker";
import {DateTime} from 'luxon';

test ("Post Dynmaic data using Faker Library", async({request})=>{
    
    
    //Generate Data using Faker Library
    const firstname = faker.person.firstName();   // ✅ must call as function
    const lastname = faker.person.lastName();     // ✅ must call as function
    const totalprice = faker.number.int({min:5,max:100});
    const depositpaid = faker.datatype.boolean(); // ✅ must call as function
    const datecheckin = DateTime.now().toFormat("yyyy-MM-dd"); // ✅ MM not mm
    const datecheckout = DateTime.now().plus({days:5}).toFormat("yyyy-MM-dd"); // ✅ days not Day
    const additionalneeds = "super bowls";
    
    //RequestBody from Faker data
    const requestBody = {
     firstname: firstname,  
     lastname: lastname,
     totalprice: totalprice,
     depositpaid: depositpaid,
     bookingdates: {
          checkin: datecheckin,
          checkout: datecheckout
     },  
     additionalneeds: additionalneeds
    }
    
    
    const response = await request.post("/booking",{data:requestBody});
    const responseBody = await response.json();
    console.log(responseBody);
    
    //Assertions for status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    
    //Assertions for responseBody attributes
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");
    
    //Assertion for json match
    expect(responseBody.booking).toMatchObject({
    "firstname": requestBody.firstname,
    "lastname": requestBody.lastname,   // ✅ corrected from firstname
    "totalprice": requestBody.totalprice,
    "depositpaid": requestBody.depositpaid,
    "additionalneeds": requestBody.additionalneeds      
    });
    
    expect(responseBody.booking.bookingdates).toMatchObject({ // ✅ corrected to responseBody.booking
        "checkin": requestBody.bookingdates.checkin,
        "checkout": requestBody.bookingdates.checkout
    });

    
});
