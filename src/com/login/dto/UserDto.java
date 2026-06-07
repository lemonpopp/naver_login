package com.login.dto;

public class UserDto {
	private int myno;
	private String myid;
	private String mypw;
	private String myemail;
	private String myname;
	private int mybirth;
	private String mymob;
	private String mygender;
	private String mynation;
	private String mytel;
	
	public UserDto() {}

	public UserDto(int myno, String myid, String mypw, String myemail, String myname, int mybirth, String mymob,
			String mygender, String mynation, String mytel) {
		super();
		this.myno = myno;
		this.myid = myid;
		this.mypw = mypw;
		this.myemail = myemail;
		this.myname = myname;
		this.mybirth = mybirth;
		this.mymob = mymob;
		this.mygender = mygender;
		this.mynation = mynation;
		this.mytel = mytel;
	}

	public int getMyno() {
		return myno;
	}

	public void setMyno(int myno) {
		this.myno = myno;
	}

	public String getMyid() {
		return myid;
	}

	public void setMyid(String myid) {
		this.myid = myid;
	}

	public String getMypw() {
		return mypw;
	}

	public void setMypw(String mypw) {
		this.mypw = mypw;
	}

	public String getMyemail() {
		return myemail;
	}

	public void setMyemail(String myemail) {
		this.myemail = myemail;
	}

	public String getMyname() {
		return myname;
	}

	public void setMyname(String myname) {
		this.myname = myname;
	}

	public int getMybirth() {
		return mybirth;
	}

	public void setMybirth(int mybirth) {
		this.mybirth = mybirth;
	}

	public String getMymob() {
		return mymob;
	}

	public void setMymob(String mymob) {
		this.mymob = mymob;
	}

	public String getMygender() {
		return mygender;
	}

	public void setMygender(String mygender) {
		this.mygender = mygender;
	}

	public String getMynation() {
		return mynation;
	}

	public void setMynation(String mynation) {
		this.mynation = mynation;
	}

	public String getMytel() {
		return mytel;
	}

	public void setMytel(String mytel) {
		this.mytel = mytel;
	}
	
}
