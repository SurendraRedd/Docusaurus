(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),i=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||s;return t?i.a.createElement(h,o(o({ref:n},p),{},{components:t})):i.a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},178:function(e,n,t){"use strict";t.r(n),n.default="data:image/jpeg;base64,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"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),i=t(6),s=(t(0),t(122)),a={id:null,title:null,sidebar_label:"MLapps",slug:"/mlapps.md"},o={unversionedId:"mlapps",id:"version-1.1.2/mlapps",isDocsHomePage:!1,title:"mlapps",description:"* Data Applications *",source:"@site/versioned_docs\\version-1.1.2\\mlapps.md",slug:"/mlapps.md",permalink:"/Docusaurus/docs/mlapps.md",editUrl:"https://github.com/SurendraRedd/Docusaurus/versioned_docs/version-1.1.2/mlapps.md",version:"1.1.2",sidebar_label:"MLapps",sidebar:"version-1.1.2/someSidebar",previous:{title:"examples",permalink:"/Docusaurus/docs/examples.md"},next:{title:"references",permalink:"/Docusaurus/docs/references.md"}},c=[],p={rightToc:c};function l(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"data-applications"},Object(s.b)("center",null,Object(s.b)("img",{src:t(178).default}),Object(s.b)("strong",{parentName:"h1"}," Data Applications "))),Object(s.b)("hr",null),Object(s.b)("h4",{id:"applications"},Object(s.b)("strong",{parentName:"h4"}," Applications ")),Object(s.b)("p",null,'=== "Create/Read/Update/Delete"'),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'- **CRUD Application**\n\n<figure>\n<img src="images/CRUD.png" width="700" />\n<figcaption>CRUD</figcaption>\n</figure>\n\n        import streamlit as st\n        import pandas as pd\n        import base64\n        from PIL import Image\n        import json\n        import urllib.request\n\n        # Database Creation & Connection\n        import sqlite3\n        from sqlite3 import Connection\n        import streamlit as st\n\n        import hashlib\n\n        URI_SQLITE_DB = "Users.db"\n\n            html_temp = """\n                <body style="background-color:red;">\n                <div style="background-color:tomato;padding:10px">\n                <h2 style="color:white;text-align:center;">Simple Login Application Code</h2>\n                </div>\n                </body>\n            """\n        st.set_page_config(\n        page_title = \'Apps\',\n        page_icon = "\u270c",\n        layout = "centered",\n        initial_sidebar_state = "expanded"\n        )\n\n        def make_hashes(password):\n            return hashlib.sha256(str.encode(password)).hexdigest()\n\n        def check_hashes(password,hashed_text):\n            if make_hashes(password) == hashed_text:\n                return hashed_text\n            return False\n\n        # """\n        # check_same_thread = False is added to avoid same thread issue\n        # """\n        conn = sqlite3.connect(URI_SQLITE_DB, check_same_thread=False)\n        c = conn.cursor()\n\n        @st.cache(hash_funcs={Connection: id})\n        def get_connection(path: str):\n            """Put the connection in cache to reuse if path does not change between Streamlit reruns.\n            NB : https://stackoverflow.com/questions/48218065/programmingerror-sqlite-objects-created-in-a-thread-can-only-be-used-in-that-sa\n            """\n            return sqlite3.connect(path, check_same_thread=False)\n\n        def create_usertable(conn: Connection):\n            c.execute(\'CREATE TABLE IF NOT EXISTS userstable(username TEXT PRIMARY KEY,password TEXT)\')\n\n        def add_userdata(conn: Connection,username,password):\n            c.execute(\'INSERT INTO userstable(username,password) VALUES (?,?)\',(username,password))\n            conn.commit()\n\n        def login_user(conn: Connection,username,password):\n            c.execute(\'SELECT * FROM userstable WHERE username =? AND password = ?\',(username,password))\n            data = c.fetchall()\n            return data\n\n        def main():\n\n            """Simple Login Application"""\n            st.markdown(html_temp, unsafe_allow_html=True)\n            menu = ["Home","Login","SignUp","Others","About"]\n            st.markdown(\n            """\n            <style>\n            .sidebar .sidebar-content {\n                # background-image: linear-gradient(#264D59, #43978D, #F9E07F, #F9AD6A, #D46C4E);\n                background-image: linear-gradient(to right top, #ebe9f3, #b7bdcc, #8094a5, #496e7c, #0c4950);\n                color: blue;\n            }\n            </style>\n            """,\n                unsafe_allow_html=True,\n            )\n\n            choice = st.sidebar.selectbox("Menu", menu)\n\n\n            if choice == "Home":\n                st.subheader("Home Page:")\n\n            elif choice == "Login":\n                st.subheader("**Please Login to the page !**")\n                username = st.sidebar.text_input("Username","")\n                password = st.sidebar.text_input("Password",type=\'password\')\n            \n            if st.sidebar.checkbox("Login"):\n                hashed_pswd = make_hashes(password)\n                result = login_user(conn,username,check_hashes(password,hashed_pswd))\n                if result:\n                st.success("Logged In as {0!s}".format(username))\n                else:\n                st.warning("Incorrect Adhar/Passport/VoterID/Password")\n\n            elif choice == "SignUp":\n                st.subheader("Create New Account")\n                new_user = st.text_input("Username","") \n                new_password = st.text_input("Password",type=\'password\')\n\n            if st.button("Signup"):\n                create_usertable(conn)\n                add_userdata(conn,new_user,make_hashes(new_password))\n                st.success("Account created successfully. Please Login to application.")\n\n            elif choice == "Others":\n                st.info("Please visit to nearest adhar or passport or voterid location to get any of the ID.")\n\n            elif choice == "About":\n                st.sidebar.title("App Version details")\n                st.sidebar.info("**App version 1.0**")\n\n\n        if __name__ == "__main__":\n            main()\n')),Object(s.b)("p",null,'=== "PencilSketcher"'),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'- **PencilSketcher App**\n\n<figure>\n<img src="images/pencil.png" width="700" />\n<figcaption>PENCIL</figcaption>\n</figure>\n\n        import streamlit as st\n        import numpy as np\n        from PIL import Image\n        import cv2\n\n        st.set_option(\'deprecation.showfileUploaderEncoding\', False)\n\n        def dodgeV2(x, y):\n            return cv2.divide(x, 255 - y, scale=256)\n\n        def pencilsketch(inp_img):\n            img_gray = cv2.cvtColor(inp_img, cv2.COLOR_BGR2GRAY)\n            img_invert = cv2.bitwise_not(img_gray)\n            img_smoothing = cv2.GaussianBlur(img_invert, (21, 21),sigmaX=0, sigmaY=0)\n            final_img = dodgeV2(img_gray, img_smoothing)\n            return(final_img)\n\n\n        st.title("PencilSketcher App")\n        st.write("This Web App is to help convert your photos to realistic Pencil Sketches")\n\n        file_image = st.sidebar.file_uploader("Upload your Photos", type=[\'jpeg\',\'jpg\',\'png\'])\n\n        if file_image is None:\n            st.write("You haven\'t uploaded any image file")\n\n        else:\n            input_img = Image.open(file_image)\n            final_sketch = pencilsketch(np.array(input_img))\n            st.write("**Input Photo**")\n            st.image(input_img, use_column_width=True)\n            st.write("**Output Pencil Sketch**")\n            st.image(final_sketch, use_column_width=True)\n')),Object(s.b)("p",null,'=== "IrisPrediction"'),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'- **IrisPrediction App**\n\n<figure>\n<img src="images/iris.png" width="700" />\n<figcaption>IRIS</figcaption>\n</figure>\n\n        import streamlit as st\n        import pandas as pd\n        from sklearn import datasets\n        from sklearn.ensemble import RandomForestClassifier\n        import urllib.request\n        from PIL import Image\n\n        html_temp = """\n            <body style="background-color:red;">\n            <div style="background-color:tomato;padding:10px">\n            <h2 style="color:white;text-align:center;"> Classifier(SL) - Iris Flower Prediction App</h2>\n            </div>\n            </body>\n        """\n\n        st.beta_set_page_config(\n                page_title = \'Iris\',\n                page_icon = "\ud83c\udf3a",\n                layout = "centered",\n                initial_sidebar_state = "expanded"\n            )\n\n        def inputFeatures():\n            sepal_length = st.sidebar.slider(\'Sepal length\', 4.3, 7.9, 5.4)\n            sepal_width = st.sidebar.slider(\'Sepal width\', 2.0, 4.4, 3.4)\n            petal_length = st.sidebar.slider(\'Petal length\', 1.0, 6.9, 1.3)\n            petal_width = st.sidebar.slider(\'Petal width\', 0.1, 2.5, 0.2)\n            data = {\'sepal_length\': sepal_length,\n                    \'sepal_width\': sepal_width,\n                    \'petal_length\': petal_length,\n                    \'petal_width\': petal_width}\n            features = pd.DataFrame(data, index=[0])\n            return features\n\n        def main():\n            st.markdown(html_temp, unsafe_allow_html=True)\n            st.sidebar.info("""\n                ## Packages:\n                - Streamlit, pandas & sklearn\n                - How to install? \n                > 1. **pip install streamlit**\n                > 2. **pip install pandas**\n                > 3. **pip install scikit-learn**\n                """)\n            st.sidebar.header(\'Input Features\')\n            df = inputFeatures()\n\n            st.sidebar.info("#### Iris Flower species : setosa, versicolor, virginica")\n            img = Image.open(urllib.request.urlopen("https://raw.githubusercontent.com/SurendraRedd/MachineLearningCode/master/Iris_Species.png")) # Opens the image from the url\n            st.sidebar.image(img, width=300, caption="")\n            st.sidebar.info("#### Features : setosa, versicolor, virginica")\n            img = Image.open(urllib.request.urlopen("https://raw.githubusercontent.com/SurendraRedd/MachineLearningCode/master/features.png")) # Opens the image from the url\n            st.sidebar.image(img, width=400, caption="")\n\n            st.subheader(\'Input Features\')\n            st.write(df)\n\n            iris = datasets.load_iris()\n            X = iris.data\n            Y = iris.target\n\n            clf = RandomForestClassifier()\n            clf.fit(X, Y)\n\n            prediction = clf.predict(df)\n            prediction_proba = clf.predict_proba(df)\n\n            st.subheader(\'labels & index number\')\n            st.write(iris.target_names)\n\n            st.subheader(\'Prediction\')\n            st.write(iris.target_names[prediction])\n            #st.write(prediction)\n\n            st.subheader(\'Prediction Probability\')\n            st.write(prediction_proba)\n\n            \n\n\n        if __name__ == \'__main__\':\n            main()\n')))}l.isMDXComponent=!0}}]);