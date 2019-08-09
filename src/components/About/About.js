import React from 'react';
import PageContainer from '../layout/PageContainer';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const About = () => (
  <PageContainer>
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography> What is Shopping List Helper?</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {' '}
          Shopping List Helper is an App to help people coordinate their
          shopping lists
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    {/* <Divider /> */}
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography> How do I use Shopping List Helper?</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>......</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </PageContainer>
);
export default About;
