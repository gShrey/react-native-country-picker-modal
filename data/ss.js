let s = require("./countries.json");
let fs = require("fs");

let allowedCountries = {
  HK:{
    name:"Hong Kong",
    callingCode:"852",
    bankFieldLabel:"Bank Code",
    idCardLabel:"ID Card",
    currencyText:"$",
    glyph:"dollar"
  },
  IN:{
    name:"India",
    callingCode:"91",
    bankFieldLabel:"IFSC",
    idCardLabel:"Aadhaar Card",
    currencyText:"Rs.",
    glyph:"inr",
    url:"https://salarybridge.in"
  },
  MA:
  {
    name:"Morocco",
    callingCode:"212",
    bankFieldLabel:"Bank Code",
    idCardLabel:"ID Card",
    currencyText:"MAD.",
  },
  GB:{
    name:"United Kingdom",
    callingCode:"44",
    bankFieldLabel:"SORT code or IBAN",
    idCardLabel:"National ID Card",
    currencyText:"£",
    glyph:"gbp",
    url:"https://salarybridge.com"
  },
  PL:{
    name:"Poland",
    callingCode:"48",
    idCardLabel:"Dowód osobisty (Identity card)",
    bankFieldLabel:"SORT code or IBAN",
    currencyText:"€",
    glyph:"eur"
  },
  SG:
  {
    name:"Singapore",
    callingCode:"65",
    idCardLabel:"ID Card",
    bankFieldLabel:"Bank Code",
    currencyText:"$",
    glyph:"dollar"
  },
  LK:
  {
    name:"Sri Lanka",
    callingCode:"94",
    idCardLabel:"ID Card",
    bankFieldLabel:"Bank Code",
    currencyText:"Rp."
  },
  US:{
    name:"United States of America",
    callingCode:"1",
    idCardLabel:"Social Security",
    bankFieldLabel:"Routing number",
    currencyText:"$",
    glyph:"dollar"
  },
  AE:
  {
    name:"United Arab Emirates",
    callingCode:"971",
    idCardLabel:"ID Card",
    bankFieldLabel:"Bank Code",
    currencyText:"AED"
  }

}

allowedCountries = Object.keys(allowedCountries);
let newList = {};

allowedCountries.forEach(function(coun){
    newList[coun] = s[coun];
});

fs.writeFile("./countries_2.json",JSON.stringify(newList));