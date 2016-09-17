package net.cds.dao.employee;

import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import net.cds.dao.JpaDao;
import net.cds.entity.Employee;

import org.springframework.transaction.annotation.Transactional;


/**
 * JPA Implementation of a {@link Employee}.
 * 
 * @author Jhonata R 
 */
public class JpaEmployeeDao extends JpaDao<Employee, Long> implements EmployeeDao
{

	public JpaEmployeeDao()
	{
		super(Employee.class);
	}


	@Override
	@Transactional(readOnly = true)
	public List<Employee> findAll()
	{
		final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
		final CriteriaQuery<Employee> criteriaQuery = builder.createQuery(Employee.class);

		Root<Employee> root = criteriaQuery.from(Employee.class);

		TypedQuery<Employee> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
		return typedQuery.getResultList();
	}

}
