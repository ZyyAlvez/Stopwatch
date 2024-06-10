export default function format(num) {
    let numArray = String(num).split("")
    while (numArray.length !== 6){
        numArray.unshift("0")
    }

    let nums = []
    let sub = []
    for (const e of numArray){
        sub.push(e)
        if (sub.length === 2){
            nums.push(String(sub[0]) + String(sub[1]))
            sub = []
        }
    }


    const seconds = nums[1]
    nums[2] = nums[2]
    nums[1] = seconds % 60
    nums[0] = Number(nums[0]) + Math.floor(seconds/60)
    console.log(nums)         // splitted the numbers into 3 different part

    let ans = ""
    nums = nums.forEach((e, i) => {
        if (String(e).length === 1){
            ans += "0"
        }

        if (i === 2){
            ans += e
        }else{
            ans += e + ":"
        }})
    return ans
}