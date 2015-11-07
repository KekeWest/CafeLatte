package com.keke.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * トップページ用コントローラー
 */
@Controller
public class IndexController {
    /**
     * トップページを表示
     * @return テンプレートのパス
     */
    @RequestMapping("/")
    public String showTopPage() {
        return "index";
    }
}