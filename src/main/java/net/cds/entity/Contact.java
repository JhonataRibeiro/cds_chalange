package net.cds.entity;

import net.cds.JsonViews;
import org.codehaus.jackson.map.annotate.JsonView;

import javax.persistence.*;
import java.util.List;


/**
 * JPA Annotated Pojo that represents a Contact.
 * 
 * @author Jhonata R.  
 */
@javax.persistence.Entity
public class Contact implements Entity
{
	@Id
	@GeneratedValue
	private Long id;

	@Column
	private String type;

	@Column
	private String value;

	//type
	@JsonView(JsonViews.User.class)
	public String getType()
	{
		return this.type;
	}


	public void setType(String type)
	{
		this.type = type;
	}

	//type
	@JsonView(JsonViews.User.class)
	public String getValue()
	{
		return this.value;
	}


	public void setValue(String value)
	{
		this.value = value;
	}
}