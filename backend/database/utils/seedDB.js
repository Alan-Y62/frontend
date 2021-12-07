const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		address: "1350 Massachusetts Ave",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      		lastname: "Shmo",
			email: "joeshmo@gmail.com",
			gpa: 2.1
		});

	await dummy_student.setCampus(dummy_campus);

	const dummy_student2 = await Student.create({
		firstname: "Sid",
		lastname: "Fish",
		email: "sydfish@gmail.com",
		gpa: 2.0
	});

await dummy_student2.setCampus(dummy_campus);
	
}

module.exports = seedDB;