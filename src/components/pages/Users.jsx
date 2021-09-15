import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

//ユーザー一覧で表示するダミーデータ
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `endo-${val}`,
    image: "https://source.unsplash.com/2l0CWTpcChI",
    email: "11111@aaa.com",
    phone: "123-456-789",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <SUserArea>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat() (aut-fit, minmax() (200px, 1fr));
  grid-gap: 20px;
`;
