## Automation Task

Please find in this repo the technical task completed. Since I am using a MacBook air M1 I had to make some changes and updates to the dependencies.

**Automate the below scenarios, taking screenshots at the end.**
    

1. - Go to the UK home page- www.directferries.co.uk
   - Navigate to the ‘Special Offers’ page
   - Change the language of the site to French

---

2. - Go to the UK home page - www.directferries.co.uk
   - Navigate to the ‘Special Offers’ page 
   - Change the language of the site to Italian


Regarding test 1 and 2 the challenge was to find a way to select the language dropdown and the chosen langugage. I used a client function to do so.


---
3. - Go to the UK My Account page - https://account.directferries.com/?culture=en-GB
   - Log into My Account using the following credentials:
      - qatesting@directferries.com
      - DFP164826683
   - Confirm on the first page (My Booking) that there is:
      - 2 passengers and 1 vehicle for the outbound sailing 
      - 1 passenger and 1 vehicle for the return sailing
   - Navigate to view the details of the outbound sailing
      - Vehicle is showing as Abarth 500
      - Lead passenger name is showing as 'TestOne TestRD'
      - Other passenger name is showing as 'TestTwo TestRD'

---
4. - If you had extra time, what would you have done differently?
I am currently still a bit unfamiliar with testcafe however, I did complete the task to the best of my ablities. Given extra time I would look for a flexible way to pass test data, I previously did it with Cypress and a JSON file, but the same way did not work here.
