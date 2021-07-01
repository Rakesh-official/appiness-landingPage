$(function() {
    // console.log('connected')
    $('.count-these').append(`<img class="img-fluid" src="./assests/images/Bitmap Copy.png" alt="">
        <h4 class="font-weight-bold name" >Dr. Vijay Agarwal</h4>
        <p class="qualific">MD, MRCP, PhD.CCT</p>
        <p class="qualific"> Lead & Sr. Consultant - Medical Oncology & Haematology</p>
        <hr class="mx-auto bg-dark" style="width: 10%;">
        <p class="mb-0 w-75 mx-auto mb-4"> Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experiance in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004</p>
        <a href="#" class="btn know-more px-4 py-2">Know more</a>`);

    //store image path aswell as text in array and run through the length of it.
    var warningS = [
        {
            image1: './assests/images/Group 2.png',
            content: 'Failure to thrive-not gaming weight and height as per the age norms'
        },
        {
            image1: './assests/images/Group.png',
            content: 'infections warranting multiple hospitalizations'
        },
        {
            image1: './assests/images/Group (1).png',
            content: 'Requirement of intravenous'
        },
       {
            image1: './assests/images/Group (2).png',
            content: '2 or more episodes of pneumonia'
        },
        {
            image1: './assests/images/Group (3).png',
            content: 'Family history of death of children at young age due to immune deficiency'
        },
        {
            image1: './assests/images/Group (4).png',
            content: 'Repeted episodes of diarrhea'
        },
        {
            image1: './assests/images/Group 2 (1).png',
            content: '2 or more episodes of sinus infections withing a year'
        },
        {
            image1: './assests/images/Group 2 (2).png',
            content: '2 or more episodes of ear discharge'
        },
        {
            image1: './assests/images/Group 2 (3).png',
            content: 'Reapeated skin infections'
        },
        {
            image1: './assests/images/Group (5).png',
            content: 'Repeated abscess formation(liver abscess, brain abscess)'
        }
    ]

    for(let key in warningS){
        $('.deficiency').append(`<div class="col-md-3 col-12 warning-sign pb-4"><div class="p-4 h-100">
        <img src="${warningS[key].image1}" alt="">
        <p class="mx-0 mt-4 mb-0">${warningS[key].content}</p>
        </div> </div>`)
    }

    //append list of FAQ
    var faq = [
        {
               content: 'Which are the hematological diseases that may benefit from bone marrow transplants?'
        },
        {
             content: 'which are the Cancers that may benefit from tbone marrow transplants?'
        },
        {
                 content: 'Do bone marrow failure syndromes require BMT?'
        },
       {
                 content: 'What are Primary Immune Deficiency diseases?'
        },
        {
                 content: 'Which are the immune deficiencies that warrant BMT'
        },
        {
                 content: 'What makes transplants at Aster CMI unique?'
        }
    ]
    for(let key in faq){
    $('.faq').append(`<div class="collapse-acc">
    <div class="row">
        <div class="col-9 col-md-11 ques">
            <h5 class="font-weight-bold mb-0">${faq[key].content}</h4>
        </div>
        <div class="col-2 col-md-1 text-right">
            <img src="./assests/images/down-arrow.png" alt="expand">
        </div>
    </div>
    <hr>
    </div>`)
    }

    //append testimony
    $('.testimony .append-quote').append(`<div class="col-sm-12">
    <div class="card">
      <div class="card-body">
          <div class="d-flex mb-4">
              <div class="avatar">
                  <!-- add avatar -->
                  <img src="./assests/images/Bitmap.png" alt="" class="rounded-circle">
              </div>
              <div class="details my-auto ml-3">
                  <h5 class="card-title mb-0 font-weight-bold">John Doe</h5>
                  <p class="m-0">Software Engineer</p>
              </div>
              <div class="double-q ml-auto">
                  <!-- add image of double quote -->
                  <img src="./assests/images/”.png" alt="quote">
              </div>
          </div>
        <em class="card-text">  It is a long established fact that a reader will be distracted by the redable content of a page when looking at its layout.</p>
      </div>
    </div>
  </div>`)

  $('.scrollToTop').on("click",function(){
    $(window).scrollTop(0);
});
});