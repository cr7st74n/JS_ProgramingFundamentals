
    let homeownerNameInput = document.querySelector('#homeowner-name');
    let homeownerHouseNumberInput = document.querySelector('#homeowner-house-number');
    let homeownerStreetNameInput = document.querySelector('#homeowner-street-name');
    let treeTypeSelect = document.querySelector('#tree-type');

    // TODO create a variable for city input element
    const CityInput = document.querySelector("#city");
    // TODO create a variable for zip code input element
    const zipcodeInput = document.querySelector("#zipcode");

    let submitButton = document.querySelector('#submit-order')

    let orderSummaryParagraph = document.querySelector('#order-summary')

    function ClassErrors(val){
        val.classList.add("error")
    }

    function DeleteError(val){
        val.classList.remove("error")
    }

    submitButton.addEventListener('click', function() {

        let name = homeownerNameInput.value 
        let houseNumber = homeownerHouseNumberInput.value
        let streetName = homeownerStreetNameInput.value
        let treeType = treeTypeSelect.value


        let i = 0;

        // TODO get the value from the input#city
        const city = CityInput.value;
        // TODO get the value from the input#zipcode
        const zipcode = zipcodeInput.value;

        // TODO Validate that all six input and select elements have been completed
        //  - check they all have a value
        const InpValues = [name, houseNumber, streetName, treeType, city,zipcode];
        const Errors = [];

        InpValues.forEach( (valueInp)=>{
            i++;
            if (valueInp === ""){
                Errors.push(`The input Number ${i} is empty! Correct it please.`);
            }
            console.log(valueInp);
        })

        
        // TODO Validate the zipcode is in the range 55001 and 56763. 

        if(zipcode < 55001 || zipcode >56763){
            Errors.push(`The zipcode is different from the State of Minnesota`);
            ClassErrors(zipcodeInput);
        }else{
            DeleteError(zipcodeInput)
        }
        // to check that the zip code is in Minnesota.
        // Make sure your script doesn't accept non-numeric input for the zip code. 

        // Optional extra: add the class .error to any inputs with an error (and only inputs with an error)
        // to give the user visual feedback for which inputs need to be fixed or completed. 
        // There's a style for input.error and select.error defined in the styles (in the head)
        // which will be applied if you give the class .error to any elements on the page. 
        // Make sure you remove this class when the form is completed correctly.
        
        // If a form element has not been completed, or if the data is not valid, 
        // add an error message to the errors array. (Hint: use push to add to the end of the array)
        // Add one error message for each problem with the form. 

        // if(!name){
        //     Errors.push("Please correct your name")
        //     ClassErrors(homeownerNameInput);
        // }

        ValidateData(homeownerNameInput);
        ValidateData(homeownerHouseNumberInput);
        ValidateData(homeownerStreetNameInput);
        ValidateData(treeTypeSelect);
        ValidateData(CityInput);

        function ValidateData(data){
            if(!data.value){
                Errors.push(`Please correct your ${data.name}`)
                ClassErrors(data);
            }else{
                DeleteError(data);
            }
        }

        // TODO - If there are any errors after checking all of the input elements, 
        // display an alert with all of the error messages. (Hint: use join)
        // and then return from this function to prevent further processing 

        if (Errors.length > 0 ){
            alert(Errors.join("\n"));
            return;
        }else{
            const displayOrder = document.querySelector("#order-summary");
            displayOrder.innerHTML= `Homeowner Name: ${name} <br>
            House Number: ${houseNumber} <br>
            Street Name: ${streetName} <br>
            City: ${city} <br>
            State: MN <br>
            Zip Code: ${zipcode} <br>
            Tree Type: ${treeType} <br>`;
        }
        // TODO - If there are no errors, use a template string to display an order 
        // summary in the order summary paragraph.

       
    })




