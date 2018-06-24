// 1) `computeUsersStats(users, progress, courses)`
window.computeUsersStats = (users, progress, courses) => {
};
return  users.map((user) => {
		const userProgress = progress[user.id];
		const users = user.name;
		let percentSum = 0;
		let totalCourses = 0;
		for (let courseIndex in userProgress) {
			totalCourses++;
			percentSum += userProgress[courseIndex].percent;
		}
		console.log("User > "+JSON.stringify(user));
		user.stats = {
			percent : percentSum / totalCourses;
		};
		return JSON.stringify(user.name);
	});


// 2) `sortUsers(users, orderBy, orderDirection)`
window.sortUsers = (users, orderBy, orderDirection) => {
};

// 3) `filterUsers(users, search)`
window.filterUsers = (users, search) => {
};

// 4) `processCohortData(options)`
window.processCohortData = (options) => {
};


