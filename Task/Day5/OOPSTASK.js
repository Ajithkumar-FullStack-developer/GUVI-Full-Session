//**Write a “person” class to hold all the details.**

class person {
    constructor(name, age, gender, study, monthlyincome, place,) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.study = study;
      this.monthlyincome = monthlyincome;
      this.place = place;
    }
  
    getPersonAge() {
      return this.age;
    }
  
    getIncome() {
      return this.monthlyincome;
    }
  
    getStudy() {
      return this.study;
    }
  }
  
  const kumar = new person(
    "kumar",
    30,
    "male"
    MCA,
    50000,
    "chennai"
  );
  const vijay = new person(
    "vijay",
   50,
   "male"
    BCA,
    80000,
    "chennai"
  );
  console.log(kumar.getPersonage(), vijay.getIncome());
