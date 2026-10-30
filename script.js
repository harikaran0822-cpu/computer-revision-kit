function showOSI(){

const osi=document.getElementById("osi");

osi.innerHTML=`

<div class="layer"><b>7. Application</b><br>HTTP, FTP, SMTP</div>

<div class="layer"><b>6. Presentation</b><br>Encryption & Compression</div>

<div class="layer"><b>5. Session</b><br>Session Management</div>

<div class="layer"><b>4. Transport</b><br>TCP / UDP</div>

<div class="layer"><b>3. Network</b><br>IP Routing</div>

<div class="layer"><b>2. Data Link</b><br>MAC Address</div>

<div class="layer"><b>1. Physical</b><br>Cables, Signals</div>

`;

}

function showTCP(){

const tcp=document.getElementById("tcp");

tcp.innerHTML=`

<div class="layer"><b>Application</b><br>HTTP FTP SMTP DNS</div>

<div class="layer"><b>Transport</b><br>TCP UDP</div>

<div class="layer"><b>Internet</b><br>IP ICMP</div>

<div class="layer"><b>Network Access</b><br>Ethernet Wi-Fi</div>

`;

}