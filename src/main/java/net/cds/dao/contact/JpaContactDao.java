package net.cds.dao.contact;

import net.cds.dao.JpaDao;
import net.cds.entity.Contact;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;


/**
 * JPA Implementation of a {@link Contact}.
 * 
 * @author Jhonata R 
 */
public class JpaContactDao extends JpaDao<Contact, Long> implements ContactDao
{

	public JpaContactDao()
	{
		super(Contact.class);
	}


	@Override
	@Transactional(readOnly = true)
	public List<Contact> findAll()
	{
		final CriteriaBuilder builder = this.getEntityManager().getCriteriaBuilder();
		final CriteriaQuery<Contact> criteriaQuery = builder.createQuery(Contact.class);

		Root<Contact> root = criteriaQuery.from(Contact.class);

		TypedQuery<Contact> typedQuery = this.getEntityManager().createQuery(criteriaQuery);
		return typedQuery.getResultList();
	}

}
