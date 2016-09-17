package net.cds.dao.user;

import net.cds.dao.Dao;
import net.cds.entity.User;

import org.springframework.security.core.userdetails.UserDetailsService;


public interface UserDao extends Dao<User, Long>, UserDetailsService
{

	User findByName(String name);

}
