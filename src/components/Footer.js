import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';


class Footer extends Component {
    render() {
        return (
            <div>
            <FooterWrapper>
                <p><strong>react application develop by Marin Leclerc</strong></p>
                <div>
                    <Link to=''>
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "1e1e1e"}} />
                    </Link>
                    <Link to=''>
                        <FontAwesomeIcon icon={faGithub} style={{color: "1e1e1e"}} />
                    </Link>
                </div>
            </FooterWrapper>
            </div>
        );
    }
}

const FooterWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
    padding: 1em 3em;
    margin-top: 3em;;
    border-top: 1px solid var(--mainWhite);
    background-color: white;
    color: #1e1e1e;
    p {
        margin-bottom: 0;
    }
    a:first-child {
        margin-right: 1em;
    }
`

export default Footer;