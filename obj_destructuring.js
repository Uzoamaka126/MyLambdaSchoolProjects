var body = document.getElementById("root");

const sampleObject = {
		name: "Uzoamaka",
		age: 22,
		occupation: "software developer",
		sex: "female"
};

const { name, age } = sampleObject;

document.getElementById("list").textContent = "My name is" + " " + name;
