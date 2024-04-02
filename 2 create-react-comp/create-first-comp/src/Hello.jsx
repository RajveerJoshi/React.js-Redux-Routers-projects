function Hello() {
  let myName = 'Rajveer';
  let number = 456;
  let fullName =() => {
    return 'Rajveer joshi';
  }
  return <p>
    MessageNo:{number} I am ur master {fullName()}
  </p>;
}

export default Hello;
