# ca-kbb
Retrieve Dataset

## <strong>Key Features</strong>
***
* Generate a datasetId from api call
* Gather all vehicles and its info (vehicleId, year, make, model, dealerId) that consist with the datasetId from an api call and form an answer
* When all necessary info is gathered, the results will be displayed through a table.
* Submit the answer as a post request through another api call that will determine whether or not it has been successful,
* if it has, it will display the amount of seconds it took to gather the info.

## <strong>How to use</strong>
***

* Step 1. 
  ```bash 
      npm install 
   ```
* Step 2. 
  ```bash
      npm run build
      or
      npm run dev (to run in dev mode)
   ```
* Step 3. (skip this step if running in dev mode) Open index.html that is in the directory of: build/index.html
* Step 4. Interact
  - Click on the Generate button to retrieve a datasetId to use.
    - Enter a valid datasetId in textfield.
  - Click on Gather Info to retrieve all necessary info that is consisted with datasetId.
  - Click on Submit Answer to get result.
## <strong>Author</strong>
Gerret Kubota
