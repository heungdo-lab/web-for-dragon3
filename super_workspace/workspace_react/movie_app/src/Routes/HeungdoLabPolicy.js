import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const Item = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Content = styled.h1`
  font-size: 19px;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  &:last-child {
    margin-bottom: 150px;
  }
`;

export default () => (
  <>
    <Helmet>
      <Item>Policy | Heungdo Lab</Item>
    </Helmet>
    <div>
      <Title>Privacy Policy</Title>
      <Item>
        1. Purpose of processing personal information
        <br />- ‘Heungdo Lab’ handles personal information for the following
        purposes and do not use it for any purpose other than the following.
      </Item>
      <Content>
        - Confirm customer's intention to sign up, identify and certify oneself
        according to the service to the customer, and maintain membership.The
        payment of an amount, supply of goods or services by management, supply
        of goods or services.shipping, etc.
      </Content>
      <Item>2. Processing and retention period of personal information</Item>
      <Content>
        ① When collecting personal information from customers, ‘Heungdo Lab’
        processes and retain personal information within the agreed period of
        personal information retention and utilization or the period of personal
        information retention and use under statutes.
        <br />
        <br />② Specific personal information processing and retention periods
        are as follows.
        <br />
        <br />- records on visits : 3 months
      </Content>
      <Item>
        3. Users of the rights, duties, and methods of exercise of information
        subjects and legal representatives may exercise the following rights as
        personal information subjects.
      </Item>
      <Content>
        ① Customer may exercise the following privacy rights to Heungdo
        Lab(‘Heungdo Lab') at any time.
        <br />
        <br />
        1. Requesting personal information access
        <br />
        <br />
        2. Request correction in case of errors, etc.
        <br />
        <br />
        3. Request for deletion
        <br />
        <br />
        4. Request Processing Stopping
      </Content>
      <Item>4. Items for processing personal information</Item>
      <Content>
        ① 'Heungdo Lab' is processing the following personal information items.
        <br />
        <br />- Required item: None
      </Content>
      <Item>
        5. Destruction of personal information
        <br />- In principle, 'Heungdo Lab' destroys the personal information
        without delay if the purpose of personal information processing is
        achieved. Procedure, deadline, and method for personal information
        destruction are as follows.
      </Item>
      <Content>
        - Procedure for personal information destruction
        <br />
        <br />
        Personal information shall be destroyed immediately after being saved
        for a certain period of time in accordance with the internal policy and
        other related statutes after achieving the purpose.
        <br />
        <br />
        - Deadline for personal information destruction
        <br />
        <br />
        Personal information shall be destroyed within five days from the end of
        the retention period, or within five days from the date when it is
        deemed unnecessary to handle personal information, such as achieving the
        purpose of processing personal information, abolishing the relevant
        service, or terminating the project.
      </Content>
      <Item>
        6. Matters concerning the installation, operation, and rejection of
        personal information collection devices
      </Item>
      <Content>
        Heungdo Lab(‘Heungdo Lab') does not use 'cookies' that store information
        of the information subject and recall frequently.
      </Content>
      <Item>7. Personal Information Protection Officer</Item>
      <Content>
        성명: Heung Do
        <br />
        <br />
        연락처: super.heungdo@gmail.com,
        <br />
        <br />
        - Customer may contact the Personal Information Protection Officer and
        the department in charge of all personal information protection related
        inquiries, complaints, and damage relief that occurred while using the
        service.
        <br />
        Heungdo Lab(‘Heungdo Lab') will respond and process customer inquiries
        without delay.
      </Content>
      <Item>8. Change of privacy policy</Item>
      <Content>
        ① This privacy policy is applied from the enforcement date, and if there
        is any addition, deletion, or correction of changes in accordance with
        statutes or policies, it will be notified 7 days prior to the
        implementation of the changes.
      </Content>
      <Item>9. Measures to secure personal information safety</Item>
      <Content>
        ① Conduct regular self-audit
        <br />
        <br />- To secure stability related to personal information handling, we
        conduct self-audit on a regular basis (once a quarter).
      </Content>
    </div>
  </>
);
