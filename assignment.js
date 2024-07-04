function contact_info(event){
    event.preventDefault();


    // start
    const chack_h3_text =document.getElementById("h3");
    const into_text = chack_h3_text.innerText='Network error !!! try again'
    // end

    // start
    const name_value = event.target.name.value;
    const chack_forNameTag = document.getElementById("forNameTag");
    const into_nmae_value =chack_forNameTag.innerText=name_value;

    const p1_tag = document.getElementById('p1');
    const into_name_text = p1_tag.innerText= ("Your name :"+' ');
    // end

    // start 
    const email_value = event.target.email.value;
    const chack_forEmailTag = document.getElementById('forEmailTag');
    const into_email_value = chack_forEmailTag.innerText=(email_value); 

    const p2_tag = document.getElementById("p2");
    const into_email_text = p2_tag.innerText=("Your email :"+' ');
    // end

    // start
    const massage_value = event.target.massage.value;
    const chack_forMassageTag = document.getElementById("forMassageTag");
    const into_massage_value = chack_forMassageTag.innerText=(massage_value);

    const p3_tag = document.getElementById('p3');
    const into_massage_text = p3_tag.innerText=('Your massage :'+' ');}
    


end
console.log(into_name_value);
console.log(into_email_value);
console.log(into_massage_value);






