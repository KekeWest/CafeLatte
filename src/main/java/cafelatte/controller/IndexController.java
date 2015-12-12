package cafelatte.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * トップページ用コントローラー
 */
@Controller
@RequestMapping("/")
public class IndexController {

//    /**
//     * トップページを表示
//     * @return テンプレートのパス
//     */
//	@RequestMapping(method = RequestMethod.GET)
//    public String index() {
//        return "index";
//    }

	@RequestMapping(value = "/apitest", method = RequestMethod.GET)
	public String test() {
		return "test";
	}

}