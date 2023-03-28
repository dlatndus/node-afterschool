(function () {
    console.log(this);
})(); //=>에러

(()=>{
    console.log(this);
})();