package com.cdp.hanzoom.api.service;

import com.cdp.hanzoom.api.request.UserFindPasswordReq;
import com.cdp.hanzoom.db.entity.User;
import com.cdp.hanzoom.api.request.UserRegisterReq;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User registerUser(UserRegisterReq userRegisterInfo); // 회원 가입
	User getUserByUserEmail(String userEmail);
	User getUser(UserFindPasswordReq userFindPasswordReq);
	boolean checkUserEmail(String userEmail); // 이메일 중복 체크
	boolean checkUserNickName(String userNickname); // 닉네임 중복 체크
	boolean deleteByUserEmail(User user);//  회원 탈퇴
}
