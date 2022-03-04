// =================================================================
// Treasury

var credit = 0;
var debit = 0;
var refinery = 0;
var donation = 0;
var personell = "";
var treasuryInput = [];
var totalCredit = 0, totalBalance = 0, totalDebit = 0, totalDonation = 0, totalOwed = 0;

function addTreasuryItem() {
    console.log("function running");
    credit = document.getElementById("credit").value;
    debit = document.getElementById("debit").value;
    refinery = document.getElementById("refinery").value;
    donation = document.getElementById("donation").value;
    console.log(document.getElementById("personell"));
    personell = document.getElementById("personell").value;

    console.log("total " + totalCredit);
    console.log("total " + totalDebit);
    console.log(" " + parseInt(refinery));
    console.log("total " + totalDonation);
    console.log("total " + totalBalance);

    totalCredit += parseInt(credit);
    totalDebit += parseInt(debit);
    totalOwed = totalOwed - (parseInt(refinery) - parseInt(credit));
    totalDonation += parseInt(donation);
    totalBalance = (totalCredit - totalDebit + totalOwed) + totalDonation;

    if (totalOwed > 0) {
        totalOwed = 0;
    }
    console.log("total " + totalCredit);
    console.log("total " + totalDebit);
    console.log("total " + totalOwed);
    console.log("total " + totalDonation);
    console.log("total " + totalBalance);

    console.log("perci is a twat - " + personell);
    var input = {
        iCredit: credit,
        iDebit: debit,
        iRefinery: refinery,
        iDonation: donation,
        iPersonell: personell
    }
    treasuryInput.push(input);

    console.log(treasuryInput);

    for (var iteration = 0; iteration < treasuryInput.length; iteration++) {
        console.log(treasuryInput[iteration]);

        var date = new Date();
        var timestamp = date.getTime();
        var convertedDate = new Date(timestamp);

        var paragraph = document.createElement("p");
        var node = document.createTextNode("At " + convertedDate.toString() + " " + treasuryInput[iteration].iPersonell + " has input a credit of " + treasuryInput[iteration].iCredit + " and a debit of " + treasuryInput[iteration].iDebit + " with " + treasuryInput[iteration].iRefinery + " owed from the refinery and donated " + treasuryInput[iteration].iDonation + " to future Magpie Industries needs.")

        paragraph.appendChild(node);
    }

    document.getElementById("treasuryinputs").appendChild(paragraph);
    document.getElementById("totalCredit").innerHTML = totalCredit;
    document.getElementById("totalDebit").innerHTML = totalDebit;
    document.getElementById("totalOwed").innerHTML = totalOwed;
    document.getElementById("totalDonation").innerHTML = totalDonation;
    document.getElementById("totalBalance").innerHTML = totalBalance;

    return false;
}




// ========================================================================
// Rock Calculator

var mass = 0;
var quant = 0;
var currentCluster = [];
var pastClusters = [];
var currentQuant = 0;


function addRock() {
    mass = document.getElementById("mass").value;
    quant = document.getElementById("quant").value;


    var rock = {
        rockMass: mass,
        rockQuant: quant,
        totalSCU: Math.round(((parseFloat(mass) / 50) * (parseFloat(quant) / 100)) * 100) / 100
    };

    currentQuant += rock.totalSCU;
    currentCluster.push(rock);

    for (var i = 0; i < currentCluster.length; i++) {
        var para = document.createElement("p");
        var node = document.createTextNode("Mass: " + currentCluster[i].rockMass + " Percent Quant: " + currentCluster[i].rockQuant + " = Quant SCU: " + currentCluster[i].totalSCU);
        var button = document.createElement("button");
        button.type = "button";
        button.innerHTML = "Mined";
        button.onclick = function () {
            var x = this.parentElement;
            x.remove();
            // x.style.backgroundColor = "red";
            this.style.backgroundColor = "red";
        }

        para.appendChild(node);
        para.appendChild(button);

    }
    var paraquant = document.createElement("p");
    var nodequant = document.createTextNode(currentQuant);

    paraquant.appendChild(nodequant);

    document.getElementById("currentClusterQuant").innerHTML = "Total Quant: " + currentQuant;
    document.getElementById("currentCluster").appendChild(para);
}

function finishCluster() {
    var totalQuant = 0;
    var para = document.createElement("p");


    pastClusters.push(currentCluster);
    console.log(pastClusters)

    for (var i = 0; i < currentCluster.length; i++) {
        totalQuant += currentCluster[i].totalSCU;

        var node = document.createTextNode("Mass: " + currentCluster[i].rockMass + " Percent Quant: " + currentCluster[i].rockQuant + " = Quant SCU: " + currentCluster[i].totalSCU);

        para.appendChild(node);
        para.appendChild(document.createElement('br'));
    }
    var node = document.createTextNode("total SCU of Quant: " + parseFloat(totalQuant));
    para.appendChild(node);
    para.appendChild(document.createElement("br"));
    para.appendChild(document.createElement("br"));
    document.getElementById("pastClusters").appendChild(para);

    currentQuant = 0;
    currentCluster = [];

}