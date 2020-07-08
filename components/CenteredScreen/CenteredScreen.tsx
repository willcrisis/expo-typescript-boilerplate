import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const CenteredScreen: FunctionComponent<PropsWithChildren<{}>> = ({
    children,
}) => <Container>{children}</Container>;

export default CenteredScreen;
