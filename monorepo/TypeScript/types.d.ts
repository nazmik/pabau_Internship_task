interface Skill {
	skill: 'React' | 'HTML' | 'JS' | 'TypeScript';
}

interface Intern {
	name: string;
	age: number;
	skills: string[];
	// skills:Skill[] Used if we want to have certain skills only
}

interface Junior {
	name: string;
	age: number;
	skills: string[];
	// skills:Skill[] Used if we want to have certain skills only
	date_of_promotion: Date;
	domain: Domain;
}

enum Domain {
	Web = 'Web',
	Connect = 'Connect',
	Backend = 'Backend',
}

interface Company {
	Interns: Intern[];
	Juniors: Junior[];
	County: string;
}

export default Company;
