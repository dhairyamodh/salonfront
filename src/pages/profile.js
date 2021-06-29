import { Modal } from '@redq/reuse-modal';
// import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'features/user-profile/settings/settings';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import Footer from 'layouts/footer';
import ErrorMessage from 'components/error-message/error-message';
import { useSelector } from 'react-redux';

const ProfilePage = ({ deviceType }) => {
  // const { name } = useSelector(state => state.auth);
  // if (!data || loading) {
  //   return <div>loading...</div>;
  // }
  return (
    <>
      {/* <ProfileProvider initData={name}> */}
      <Modal>
        <PageWrapper>
          <SidebarSection>
            <Sidebar />
          </SidebarSection>
          <ContentBox>
            <SettingsContent deviceType={deviceType} />
          </ContentBox>

          <Footer />
        </PageWrapper>
      </Modal>
      {/* </ProfileProvider> */}
    </>
  );
};

export default ProfilePage;
