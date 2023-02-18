const inputHarcoded = `
{
    "employeeInformation": {
        "employeeDetails": {
            "employeeId": "Harold02",
            "status": "A",
            "firstName": "Harold",
            "lastName": "Montes",
            "socialSecurityNumber": "111-11-1111",
            "i9onFile": false,
            "importantDates": {
                "hiredDate": "02/16/2023"
            },
            "employeeResidence": {
                "country": "United States"
            }
        }
    },
    "jobAndPayRate": {
        "jobDetails": {
            "processingGroup": "AlberthGroup"
        },
        "payRate": {
            "payType": "S",
            "salaryPerPayCycle": 100.0,
            "equivalentHourlyRateForCalculations": 1.25
        },
        "directDeposit": {
            "enableDirectDeposit": false
        }
    },
    "taxes": {
        "federalTax": {
            "filingStatus": "S",
            "nonresidentAlien": false,
            "employeeCompletedW4PriorTo2020": false,
            "exemptFromWithholding": false,
            "w4PriorTo2020": {
                "numberOfWithholdingAllowances": 0,
                "additionalWithholding": 0.0
            }
        }
    }
}
`
main()
function main() {
  document.getElementById('inJson').value = inputHarcoded
}

let variables = ''

function iterateJson(jsonObj, tab = '') {
  // tab= ''
  for (let key in jsonObj) {
    // tab = tab + '\t'
    if (typeof jsonObj[key] === 'object') {
      // Recursively call this function if the value is another JSON object
      variables += `${tab}${key}:\n\t${tab}type: object\n`
      // tab = tab + '\t'
      iterateJson(jsonObj[key], tab + '\t');
    } else {
      // Do something with the value (e.g. print it to console)
      variables += `${tab}${key}:\n${tab}\ttype: ${typeof jsonObj[key]}\n`
      // console.log(jsonObj[key]);
    }
  }

}

function converter() {
  const inputJsonString = document.getElementById('inJson').value
  const inputJsonObject = JSON.parse(inputJsonString)
  console.log('si esta llamando')
  iterateJson(inputJsonObject)
  console.log(variables)
  document.getElementById('outYaml').value = variables
}

// 
document.getElementById('btnConvernter').addEventListener('click', () => {
  converter()
})












