function printArr(arr){
   let delimeter=arr[arr.length-1];
   arr.pop();
   let result='';
   for(let i=0;i<arr.length;i++){
       if(i==0){
           result+=arr[i];
       }else {
           result+=delimeter+arr[i];
       }
   }
return result;
}