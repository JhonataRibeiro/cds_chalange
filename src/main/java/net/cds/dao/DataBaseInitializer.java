package net.cds.dao;

import java.util.Date;
import java.util.ArrayList;

import net.cds.dao.user.UserDao;
import net.cds.dao.employee.EmployeeDao;
import net.cds.dao.contact.ContactDao;
import net.cds.entity.Contact;
import net.cds.entity.User;
import net.cds.entity.Employee;

import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Initialize the database with some test entries.
 * 
 * @author 
 */
public class DataBaseInitializer
{

	private UserDao userDao;

	private EmployeeDao employeeDao;

	private ContactDao contactDao;

	private PasswordEncoder passwordEncoder;


	protected DataBaseInitializer()
	{
		/* Default constructor for reflection instantiation */
	}


	public DataBaseInitializer(UserDao userDao,  EmployeeDao employeeDao,  ContactDao contactDao , PasswordEncoder passwordEncoder)
	{
		this.userDao = userDao;
		this.employeeDao = employeeDao;
		this.contactDao = contactDao;
		this.passwordEncoder = passwordEncoder;
	}


	public void initDataBase()
	{

		ArrayList<String> skills = new ArrayList<String>();
		skills.add("JAVA");
		skills.add("PHP");
		skills.add("NODE");

		User userUser = new User("user", this.passwordEncoder.encode("user"));
		userUser.addRole("user");
		this.userDao.save(userUser);

		User adminUser = new User("admin", this.passwordEncoder.encode("admin"));
		adminUser.addRole("user");
		adminUser.addRole("admin");
		this.userDao.save(adminUser);

		Employee employee = new Employee();
		employee.setName("Janine R");
		employee.setAddress("Quadra 26 Conjunto E casa 09");
		employee.setOffice("Desenvolvedora front end");
		employee.setSector("Escritorio de inovacoes");
		employee.setSkills(skills);
		employee.setBiography("Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.");
		this.employeeDao.save(employee);


		employee.setName("Lucas Hiago");
		employee.setAddress("Quadra 26 Conjunto I casa 09");
		employee.setBiography("Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.");

		employee.setOffice("Desenvolvedor front end");
		employee.setSector("Suporte");
		this.employeeDao.save(employee);

		employee.setName("Carlos R");
		employee.setAddress("Quadra 26 Conjunto I casa 09");
		employee.setOffice("Desenvolvedor front end");
		employee.setBiography("Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.");
		employee.setSector("Escritorio de inovacoes");
		employee.setSkills(skills);
		this.employeeDao.save(employee);

		employee.setName("Amanda R");
		employee.setAddress("Quadra 26 Conjunto I casa 09");
		employee.setBiography("Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem.");
		employee.setOffice("Desenvolvedor front end");
		employee.setSector("Escritorio de inovacoes");
		this.employeeDao.save(employee);

		employee.setName("Lara R");
		employee.setAddress("Quadra 26 Conjunto I casa 09");
		employee.setOffice("Desenvolvedor back-end");
		employee.setSector("Escritorio de inovacoes");
		this.employeeDao.save(employee);

		

	}

}
