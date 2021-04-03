function ageinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Age"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Age";
        title.innerHTML = "Age of the person in years";
    }
}

function sexinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Sex"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Sex";
        title.innerHTML = "Gender <br>" +
        "<i style='color: white;'>-- Value 0: </i> Female <br>" +
        "<i style='color: white;'>-- Value 1: </i> Male <br>";
    }
}

function cpinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Chest Pain Type (cp)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Chest Pain Type (cp)";
        title.innerHTML = "Angina is a type of chest pain caused by reduced blood flow to the heart <br> "+
        "<i style='color: white;'>-- Value 0: Typical angina: </i> Heart is working harder than usual (perhaps after exercise). <br> " +
        "<i style='color: white;'>-- Value 1: Atypical angina: </i> Does not follow regular pattern (can occur randomly). <br> " +
        "<i style='color: white;'>-- Value 2: Non-anginal pain: </i> Likely if chest pain is over 30 minutes. <br> " +
        "<i style='color: white;'>-- Value 3: Asymptomatic: </i> No regular pattern or clear symptoms. <br>";
    }
}

function trestbpsinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Resting B.P. (trestbps)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Resting B.P. (trestbps)";
        title.innerHTML = "Resting blood pressure (im mm Hg on admission to the hospital) <br>" + 
                          "<i style='color: white;'>-- Typically this is 120 mm Hg for systolic pressure and 80 mm Hg for diastolic pressure. </i> <br>" +
                          "<i style='color: white;'>-- Anything above 130-140 is typically cause for concern </i>";
    }
}

function cholinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Serum Cholestrol (chol)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Serum Cholestrol (chol)";
        title.innerHTML = "Displays Serum Cholestrol in mg/dL. <br>" +
                          "<i style='color: white;'>-- serum = </i> <br>" +
                          "<ul><li> LDL + HDL + .2 * Triglycerides </li> <li> above 200 is cause for concern </li>";
    }
}

function fbsinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Fasting Blood Sugar (fbs)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Fasting Blood Sugar (fbs)";
        title.innerHTML = "Fasting blood sugar is your blood sugar level without having anything to eat or drink for a long duration of time. Usually, this is measured in the morning. <br>" +
                          "<i style='color: white;'> -- Value 0: </i> <120mg/dL <br> " +
                          "<i style='color: white;'> -- Value 1: </i> >120mg/dL <br> " +
                          "<ul><li> >126 mg/dL signals diabetes. </li></ul>";
    }
}

function restecginfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Resting ECG Results (restecg)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Resting ECG Results (restecg)";
        title.innerHTML = "Displays resting electrocardiographic results. <br> " + 
                          "<i style='color: white;'>--Value 0: </i> Nothing to note (normal). <br> " +
                          "<i style='color: white;'>--Value 1: </i> ST-T wave abnormality. <br> " +
                          "<ul><li>Can range from mild symptoms to severe problems</li><li>Signals non-normal heart beat</li></ul>" +
                          "<i style='color: white;'>--Value 2: </i> Possible or definite left ventricular hypertrophy. <br> " +
                          "<ul><li>Enlarged heart's main pumping chamber.</li></ul>" ;
    }
}

function thalachinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Max Heart Rate (thalach)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Max Heart Rate (thalach)";
        title.innerHTML = "Maximum heart rate achieved by in individual. <br>" + 
                          "<i style='color: white;'> --> Usually after a period of intense exercise like running, to increase heart rate.</i>";
    }
}

function exanginfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Exercise Induced Angina (exang)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Exercise Induced Angina (exang)";
        title.innerHTML = "Does moderate to intense exercise cause your chest to hurt? <br>" +
                          "<i style='color: white;'>-- Value 0: </i> NO <br> " +
                          "<i style='color: white;'>-- Value 1: </i> YES ";
    }
}

function oldpeakinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "ST Depression (oldpeak)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "ST Depression (oldpeak)";
        title.innerHTML = "ST Depression induced by exercise relative to rest. <br> " +
        "<i style='color: white;'> --> Displays a value which is integer or float. </i> ";
    }
}

function slopeinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Slope of ST segment (slope)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Slope of ST segment (slope)";
        title.innerHTML = "The slope of the peak exercise ST segment. <br> "+
        "<i style='color: white;'>-- Value 0: Upsloping: </i> Better heart rate with exercise (uncommon). <br> " +
        "<i style='color: white;'>-- Value 1: Flat: </i> Minimal Change (Typical Healthy Heart). <br> " +
        "<i style='color: white;'>-- Value 2: Downsloping: </i> Signs of unhealthy heart. <br> ";
        
    }
}

function cainfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Major Vessels Colored (ca)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Major Vessels Colored (ca)";
        title.innerHTML = "Number of major vessels (0-3) colored by flouroscopy. Fluoroscopy is the examination of a body through an X-Ray machine. It can obtain real time moving images of the interior of the body. <br>" +
                          "<i style='color: white;'>-- Coloured vessel means the doctor can see the blood passing through </i> <br>" + 
                          "<i style='color: white;'>-- The more blood movement, the better (no clots). </i> <br>" ;
    }
}

function thalinfo(){
    // alert("age");
    var head = document.getElementById("inpname");
    var title = document.getElementById("inpinfo");
    if (head.innerHTML === "Thalassemia (thal)"){
        head.innerHTML = "";
        title.innerHTML = "";
    }
    else{
        head.innerHTML = "Thalassemia (thal)";
        title.innerHTML = "This  is an inherited blood disorder characterised by less oxygen-carrying protein (haemoglobin) and fewer red blood cells in the body than normal. <br> "+
        "<i style='color: white;'>-- Value 1, 2, 3: Normal: </i> No issues or history of Thalassemia. <br> " +
        "<i style='color: white;'>-- Value 6: Fixed Defect: </i> Thalassemia has been treated through medical procedures. <br> " +
        "<i style='color: white;'>-- Value 7: Reversable Defect: </i> Thalassemia present, but has not been treated through medical procedures <br> ";
        
    }
}