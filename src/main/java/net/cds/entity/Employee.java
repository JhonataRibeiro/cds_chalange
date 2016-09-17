package net.cds.entity;

import  net.cds.entity.Contact;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.List;

import javax.persistence.*;

import net.cds.JsonViews;

import org.codehaus.jackson.map.annotate.JsonView;


/**
 * JPA Annotated Pojo that represents a Employee.
 * 
 * @author Jhonata R.  
 */
@javax.persistence.Entity
public class Employee implements Entity
{
	@Id
	@GeneratedValue
	private Long id;

	@Column
	private String name;

	@Column
	private String address;

	@Column
	private String office;

	@Column
	private String sector;

	@Column
	private String biography;

	@ElementCollection(fetch = FetchType.EAGER)
	@Column(name="skills")
	private List<String> skills;

	@ElementCollection(fetch = FetchType.EAGER)
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="contacts")
	private Contact contacts;

	//Methods

	@JsonView(JsonViews.User.class)
	public Long getId()
	{
		return this.id;
	}

	//Name
	@JsonView(JsonViews.User.class)
	public String getName()
	{
		return this.name;
	}


	public void setName(String name)
	{
		this.name = name;
	}

	//Address
	@JsonView(JsonViews.User.class)
	public String getAddress()
	{
		return this.address;
	}


	public void setAddress(String address)
	{
		this.address = address;
	}

	//Office
	@JsonView(JsonViews.User.class)
	public String getOffice()
	{
		return this.office;
	}


	public void setOffice(String office)
	{
		this.office = office;
	}

	//Sector
	@JsonView(JsonViews.User.class)
	public String getSector()
	{
		return this.sector;
	}


	public void setSector(String sector)
	{
		this.sector = sector;
	}

	//Biography
	@JsonView(JsonViews.User.class)
	public String getBiography()
	{
		return this.biography;
	}


	public void setBiography(String biography)
	{
		this.biography = biography;
	}

	/**
	 * @return the skills
	 */
	@JsonView(JsonViews.User.class)
	public List<String> getSkills()
	{
		return skills;
	}

	/**
	 * @param skills the tags to set
	 */

	public void setSkills(List<String> skills)
	{
		this.skills = skills;
	}

	/**
	 * @return the contacts
	 */
	@JsonView(JsonViews.User.class)
	public Contact getContacts()
	{
		return contacts;
	}

	/**
	 * @param contacts the tags to set
	 */

	public void setContacts(Contact contacts)
	{
		this.contacts = contacts;
	}


	@Override
	public String toString()
	{
		return String.format("NewsEntry[%d, %s]", this.id, this.name, this.address, this.office,this.sector, this.biography, this.skills, this.contacts);
	}



}