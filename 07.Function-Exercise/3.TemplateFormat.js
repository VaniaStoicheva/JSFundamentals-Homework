/**
 * Created by 1234 on 3.6.2017 г..
 */
function template(input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`);
    for(let i=0;i<input.length;i+=2){
        let question=input[i];
        let answer=input[i+1];
        console.log(`<question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`);
    }
    console.log(`</quiz>`);
}
template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);