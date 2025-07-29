const testimonials = [
  {
    name: "Neha Satrawla",
    feedback:
      "I had great experience with Dr. Ravina Duhan. She is able to provide a detailed explanation of your dental issues. Dr Ravina provides a friendly environment that allows you to feel at ease.she is my daughter’s favourite dentist.After my experience I can highly recommend the dentist as a go to far all your dental needs.",
    image: "/image/reviews/neha.png",
  },
  {
    name: "Somveer Dhillon",
    feedback:
      "Excellent dental clinic...I visited for my 11 year old daughter for treatment of her infected teeth....Dr Ravina Duhan is so cooperative with patient..her teeth are better now... almost ok...I strongly recommend to visit the clinic for better treatment... somveer Dhillon sec14 dwarka",
    image: "/image/reviews/somveer.png",
  },
  {
    name: "Rishika Razdan",
    feedback:
      "Great experience with Dr.Ravina Duhan.She done my treatment for scaling as well as dental extraction. Truly recommended 🙂",
    image: "/image/reviews/rishika.png",
  },

  {
    name: "Anupama Thapa",
    feedback:
      "Very good and nice doctor. I really like the way she ellobrate and discuss the issue and also she educate her patient. Very clean and hygiene.",
    image: "/image/reviews/anupama.png",
  },
  {
    name: "Madhvan H",
    feedback:
      "Each thing is done very professionally and they give one of the best services!.",
    image: "/image/reviews/madhvan-h.png",
  },
  {
    name: "Deepti Sharma",
    feedback:
      "Dr. Ravina duhan is confident in her expertise. She patiently answered all my questions. The receptionist was amazing she made us comfortable. She was very calm.",
    image: "/image/reviews/deepti-sharma.png",
  },
  {
    name: "AM",
    feedback:
      "Dr. Ravina is very good in dental services….She is not at all business minded..I know her when this place was know by the name of Dentonova ,like 13-15 years back..",
    image: "/image/reviews/am.png",
  },
  {
    name: "Madhurima Juyal",
    feedback:
      "Great experience. Dr Ravina & her staff are very polite & sweet. Definitely one of the best dentist in Delhi! :)",
    image: "/image/reviews/madhurima-juyal.png",
  },
  {
    name: "Sukriti",
    feedback:
      "I had a very good, smooth and professional experience here. Would recommend. Dr. Ravina and the staff Saloni are really polite and respectful.)",
    image: "/image/reviews/sukriti.png",
  },
  {
    name: "Kashish Sethi",
    feedback:
      "I had a very pleasant experience with Dr. Ravina Duhan and her staff. Initially I was very anxious about procedure, but she was very patient and spent a lot of time trying to calm me down . She explained the procedure in simple words to remove all my doubts and fear. Dr Ravina Duhan is a professional and has a naturally lovely personality. She is the best dentist I have ever had.Thanks Doctor , Stay Blessed.",
    image: "/image/reviews/kashish-sethi.png",
  },
  {
    name: "Aushim Gupta",
    feedback:
      "Very professional and hardworking doctor.Fixed my cavity at record speed and was considerate throughout.Very good experience.",
    image: "/image/reviews/aushim-gupta.png",
  },
  {
    name: "Dhanush Alva",
    feedback:
      "Hands down one of the best dentist's I've come across. Super professional and will always give the right guidance. Thank you for treating me Dr. Ravina..",
    image: "/image/reviews/danush-alva.png",
  },
  {
    name: "Manish Rawat",
    feedback:
      "I had a very good experience for the wisdom tooth treatment,Dr.Ravina is very experienced Professional and highly recommended.",
    image: "/image/reviews/manish-rawat.png",
  },
  {
    name: "Dhirender Kumar Thakur",
    feedback:
      "10 years back I had put cap on teeth, 10 years have passed and till now it is working properly. She's very experienced doctor thanks Dr. Raveena Duhan",
    image: "/image/reviews/dhirender.png",
  },
  {
    name: "Nidhi Thapa",
    feedback:
      "Amazing experience with Dr.Ravina Duhan.she gave me  guidance regarding taking care of teeth. Must visit here if anyone suffering from teeth issues ✌️",
    image: "/image/reviews/nidhi-thapa.png",
  },
  {
    name: "Sumit Chaudhary",
    feedback:
      "I had a very good experience for my dental treatment by Dr.Ravina Duhan.",
    image: "/image/reviews/sumit-chaudhary.png",
  },
  {
    name: "Manoj Desai",
    feedback:
      "We took a consultation for my 4 years kid. Doctor explained all the current problems and solutions with the best outcome. Thank you",
    image: "/image/reviews/manoj-desai.png",
  },
  {
    name: "Dhiraj Kumar Singh",
    feedback:
      "It's great experience, As doctor is supporting and services are on time with perfect guidance about medicine and treatment which is at minimum cost.",
    image: "/image/reviews/dheeraj.png",
  },
  {
    name: "Hasma Rani Jain",
    feedback:
      "I got best treatment.And got good solution for my old tooth problem .",
    image: "/image/reviews/hamsa-rani-jain.png",
  },
  {
    name: "Mainsha Negi",
    feedback:
      "Best doctor in dwarka for any dental related issues. Must visit👍",
    image: "/image/reviews/manisha-negi.png",
  },
  {
    name: "NEHA CHANDEL",
    feedback: "Great service.. very professional.. thanks Ravina for service.",
    image: "/image/reviews/neha-chandel.png",
  },
];

let index = 0;
const testimonialContainer = document.getElementById("testimonial");

function showTestimonial(i) {
  const t = testimonials[i];
  testimonialContainer.innerHTML = `
      <img src="${t.image}" alt="${t.name}" />
      <p>"${t.feedback}"</p>
      <h4>- ${t.name}</h4>
    `;
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

// Auto-play every 6 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 6000);

// Initialize
showTestimonial(index);
