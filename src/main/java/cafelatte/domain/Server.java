package cafelatte.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "servers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Server {

	@Id
	@GeneratedValue
	public Integer id;

	@Column(nullable = false)
	public String settingName;

	@Column(nullable = false)
	public String serverAddr;

	@Column(nullable = false)
	public Integer serverPort;

	@Column(nullable = false)
	public String nickName;

}
