const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const isAlphanumericPalindrome = (str) => {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(`Cleaned input: ${cleaned}`);
  return cleaned === cleaned.split("").reverse().join("");
};

checkBtn.addEventListener("click", () => {
const input = textInput.value.trim();

if(input === ""){
alert("Please input a value");
return;
}


 if (isAlphanumericPalindrome(input)) {
    result.textContent = `${input} is a palindrome.`;
    result.style.color = "green";
  } else {
    result.innerHTML = `${input} is not a palindrome.`;
    result.style.color = "red";
  }
});