import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";

import { LoginButtonType, LoginInputType } from "@Style/.";
import { Wrapper, Title, LoginContainer, Footer } from "./styles";
import { LoginClick } from "./util";
import { useSetRecoilState } from "recoil";
import { userInfoAtom } from "@Recoil/CheckLogin";
import { checkMobile } from "@Util/.";

const LoginInput = () => {
  const setUser = useSetRecoilState(userInfoAtom);
  const idRef = useRef<HTMLInputElement | null>(null);
  const pwRef = useRef<HTMLInputElement | null>(null);
  const navigator = useNavigate();

  const handleLoginClick = () =>
    LoginClick({ idRef, pwRef, navigator, setUser });
  const handleRegisterClick = () => {
    navigator("/register");
  };
  const handleFindInfo = () => {
    alert("관리자에게 문의하세요");
  };
  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Wrapper type={"id"}>
        <p>ID</p>
        {!checkMobile() ? 
        (<Input
          {...LoginInputType} 
          placeholder="ID를 입력하세요."
          inputRef={idRef}
        />) : 
        (<Input
          {...LoginInputType} width="25vw"
          placeholder="ID를 입력하세요."
          inputRef={idRef}
        />)
        }
        
      </Wrapper>
      <Wrapper type={"pwd"}>
        <p>PW</p>
        {!checkMobile() ? 
        (<Input
          {...LoginInputType}
          placeholder="패스워드를 입력하세요."
          type="password"
          inputRef={pwRef}
        />) :
        (<Input
            {...LoginInputType} width="25vw"
            placeholder="패스워드를 입력하세요."
            type="password"
            inputRef={pwRef}
        />)
        }
      </Wrapper>
      <LoginButton
        {...LoginButtonType}
        title="로그인"
        onClick={handleLoginClick}
      />
      <Footer>
        <p onClick={handleFindInfo}>아이디/비밀번호 찾기</p>
        <p onClick={handleRegisterClick}>회원가입</p>
      </Footer>
    </LoginContainer>
  );
};

export default LoginInput;
