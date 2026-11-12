const users = [
  {
    fullName: "Aman Verma",
    profession: "Frontend Developer",
    description:
      "React/JavaScript developer who builds responsive and accessible web apps. Enjoys UI animation and performance tuning.",
    image:
      "https://storage.googleapis.com/ureify-strapi-assets/Job_Search_for_Front_End_Developer_b8b113ec25/Job_Search_for_Front_End_Developer_b8b113ec25.jpg",
    tag: "frontend",
  },
  {
    fullName: "Rohit Sen",
    profession: "Data Analyst",
    description:
      "Data enthusiast who transforms raw data into actionable insights using Python and SQL. Loves dashboards and storytelling with data.",
    image:
      "https://cdn.corporatefinanceinstitute.com/assets/financial-data-analyst-job-profile.jpeg",
    tag: "data",
  },
  {
    fullName: "Vikram Patel",
    profession: "Product Manager",
    description:
      "PM focused on user-centric products, roadmaps and cross-functional delivery. Strong on user research and metrics.",
    image:
      "https://www.mediabistro.com/wp-content/uploads/2017/05/Product-Manager.jpg",
    tag: "product",
  },
  {
    fullName: "Sahil Roy",
    profession: "Mobile Developer",
    description:
      "Cross-platform mobile developer (React Native / Flutter). Builds fast, polished apps with good offline support.",
    image:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80",
    tag: "mobile",
  },
  {
    fullName: "Deepak Kumar",
    profession: "DevOps Engineer",
    description:
      "Infrastructure and CI/CD engineer. Automates deployments, monitors systems and improves reliability/scalability.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBepTvgMvrxolyqrzQ9qbNLkql6ADpLAKOA&s",
    tag: "devops",
  },
];
let sum = " ";
users.forEach(function (elem) {
  sum += `  <div class="card">
            <img src="${elem.image}"
                alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`;
  document.querySelector("main").innerHTML = sum;
});
