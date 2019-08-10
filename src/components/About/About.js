import React from 'react';
import PageContainer from '../layout/PageContainer';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { AboutData } from './AboutData';

const About = () => (
  <PageContainer>
    {AboutData.map(question => {
      return (
        <ExpansionPanel key={question.question}>
          <ExpansionPanelSummary>
            <Typography>{question.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{question.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    })}
    {/* <Divider /> */}
  </PageContainer>
);
export default About;
