import ApplyButton from "@Atoms/Button/Apply";
import { STUDY_STATUS } from "@Constant/.";
import { ApplyButtonType } from "@Style/.";
import { ProjectContentType } from "@Type/.";
import {
  Container,
  Head,
  Status,
  Info,
  Title,
  CollectingInfoContainer,
  MobileApplyBtnContainer,
} from "./style";

const CardBoardPreview = ({
  name,
  description,
  totalHeadcount,
  numParticipant,
  leaderName,
  status,
  projectTechStacks = [],
}: ProjectContentType) => {
  const techStackStr = projectTechStacks.map((item) => item.name).join("/");
  return (
    <Container>
      <Head>
        <Status>{STUDY_STATUS[status]}</Status>
        <Info>{techStackStr}</Info>
      </Head>
      <CollectingInfoContainer>
        <Title>제목 : {name}</Title>
        <Title>소개 : {description}</Title>
        <Info>{`리더 : ${leaderName}`}</Info>
        <Info>{`인원 : ${numParticipant} / ${totalHeadcount}`}</Info>
      </CollectingInfoContainer>
      <MobileApplyBtnContainer>
        <ApplyButton {...ApplyButtonType()} />
      </MobileApplyBtnContainer>
    </Container>
  );
};

export default CardBoardPreview;
