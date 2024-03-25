let val, hra, da, tvl, pf, gp, net;
const payment = () => {
    val = parseInt(document.getElementById("bp").value);
    hra = document.getElementById("hra").value = val * (10 / 100);
    da = document.getElementById("da").value = val * (5 / 100);
    tvl = document.getElementById("tvl").value = val * (15 / 100);
    pf = document.getElementById("pf").value = val * (15 / 100);
    gp = document.getElementById("gp").value = val + hra + da + tvl + pf;
    net = document.getElementById("np").value = gp - pf;

}
document.getElementById("bp").addEventListener("keyup", payment);
let id = 0;
document.getElementById("subbtn").addEventListener("click", () => {
    console.log(gp, net);
    const emptDetails = {
        id: (++id),
        Ename: document.getElementById("ename").value,
        designation: document.getElementById("designation").value,
        basicpay: val,
        hra: hra,
        da: da,
        travelling: tvl,
        pf: pf,
        grosspay: gp,
        nextpay: net
    }
    console.log(emptDetails);
    let storedata = localStorage.getItem("userdata");
    let passdata = storedata ? JSON.parse(storedata) : [];
    passdata.push(emptDetails);
    localStorage.setItem("userdata", JSON.stringify(passdata));
    document.getElementById("bp").value = "";
    document.getElementById("hra").value = "";
    document.getElementById("da").value = "";
    document.getElementById("tvl").value = "";
    document.getElementById("pf").value = "";
    document.getElementById("gp").value = "";
    document.getElementById("np").value = "";
})

document.getElementById("showbtn").addEventListener("click", () => {

    let storedata = localStorage.getItem("userdata");
    console.log(storedata);
    let passdata = storedata ? JSON.parse(storedata) : [];
    let output = "";

    passdata.map((val) => {
        output += `<tr>
         <td>${val.id}</td>
         <td>${val.Ename}</td>
         <td>${val.designation}</td>
         <td>${val.basicpay}</td>
         <td>${val.hra}</td>
         <td>${val.da}</td>
         <td>${val.travelling}</td>
         <td>${val.pf}</td>
         <td>${val.grosspay}</td>
         <td>${val.nextpay}</td>
         </tr>`
    })
    document.getElementById("tbody").innerHTML = output

});
