import * as React from 'react';
import { Text, withTheme } from 'react-native-paper';

import adjust from "../Config/Adjust";

const ResponsiveText = ({ h1, h2, h3, h4, h5,  p, bold, 
                 italic, title,style, ...rest })=> {
    return (
        <Text style={[
            h1 && { fontSize: adjust(48) },
            h2 && { fontSize: adjust(32) },
            h3 && { fontSize: adjust(20)},
            h4 && { fontSize: adjust(20) },
            h5 && { fontSize: adjust(14) },
            p && { fontSize: adjust(8) },
            bold && { fontWeight: 'bold'},
            italic && { fontStyle: 'italic'},
            style
        ]}{...rest}>{title}</Text>
    );
};

export default withTheme(ResponsiveText);