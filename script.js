const membersData = [
    {
        name: "Awais Tariq",
        role: "Frontend Developer",
        img: "Awais.png",
        bio: "Awais is a passionate frontend developer with expertise in HTML, CSS, and JavaScript."
    },
    {
        name: "Moeez ur Rehman",
        role: "Backend Developer",
        img: "Moeez.png",
        bio: "Moeez is a skilled backend developer experienced in Php, Node.js, and databases."
    },
    {
        name: "Saher Ali",
        role: "Designer",
        img: "Saher.png",
        bio: "Saher is a creative designer with a strong eye for aesthetics and user experience."
    },
    {
        name: "Saad Majid",
        role: "Project Manager",
        img: "https://via.placeholder.com/150",
        bio: "Saad is an organized project manager who ensures projects are delivered on time and within budget."
    }
];

const membersContainer = document.getElementById("members");

membersData.forEach(member => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member");
    
    memberDiv.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h2>${member.name}</h2>
        <p><strong>Role:</strong> ${member.role}</p>
        <p>${member.bio}</p>
    `;
    
    membersContainer.appendChild(memberDiv);
});
