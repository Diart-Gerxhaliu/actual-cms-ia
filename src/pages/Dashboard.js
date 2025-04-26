import React, { useEffect, useState } from "react";
import HeaderCustomizer from "../components/organisms/HeaderCustomizer";
import "./Dashboard.css";

function Dashboard() {
  // * States of this page
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [data, setData] = useState("dash");
  const [dark, setDark] = useState(false);
  let admin = useState(JSON.parse(localStorage.getItem("admin")));
  const [page, setPage] = useState("Home");
  const [style, setStyle] = useState("General");

  //! Content
  //* home page localStorage import
  let [homeBanner, setHomeBanner] = useState(
    JSON.parse(localStorage.getItem("HomeBanner")) || []
  );
  let [homeAbout, setHomeAbout] = useState(
    JSON.parse(localStorage.getItem("HomeAbout")) || []
  );
  let [homeServices, setHomeServices] = useState(
    JSON.parse(localStorage.getItem("HomeServices")) || []
  );

  //* about page localStorage import
  let [aboutData, setAboutData] = useState(JSON.parse(localStorage.getItem("aboutData"))|| [])

  //* services page localStorage import
  let [servicesBanner, setServicesBanner] = useState(JSON.parse(localStorage.getItem("servicesBanner"))||[]);
  let [servicesGalery, setServicesGalery] = useState(JSON.parse(localStorage.getItem("servicesData"))||[]); 


  //* feedback page localStorage import
  let feedback = JSON.parse(localStorage.getItem("ContactForm"));

  //* logo import
  let LG = JSON.parse(localStorage.getItem("Logo"));

  //! Style
  //*Body
  let [bodyStyle, setBodyStyle] = useState(
    JSON.parse(localStorage.getItem("BodyStyle"))
  );
  //*Menu
  let [menuStyle, setMenuStyle] = useState(
    JSON.parse(localStorage.getItem("MenuStyleDinamic")) || []
  );
  //*Banner
  let [bannerStyle, setBannerStyle] = useState(
    JSON.parse(localStorage.getItem("BannerStyle")) || []
  );

  //!Config the blog
  //*set the posts
  const [blogPosts, setBlogPosts] = useState(JSON.parse(localStorage.getItem("blogPosts")) || [] )

    const toggleConfig = (id) => {
      const updatedPosts = blogPosts.map((post) =>
        post.id === id ? { ...post, isConfigOpen: !post.isConfigOpen } : post
      );
      setBlogPosts(updatedPosts);
    };
  
    const handleInputChange = (e, id, field) => {
      const updatedPosts = blogPosts.map((post) => {
        if (post.id === id) {
          const updatedPost = { ...post, [field]: e.target.value };
          return updatedPost;
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };


    const handleTagChange = (e, postId, tagIndex) => {
      const updatedPosts = blogPosts.map((post) => {
        if (post.id === postId) {
          const updatedTags = [...post.tags];
          updatedTags[tagIndex] = e.target.value;
          return { ...post, tags: updatedTags };
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };
    
    const removeTag = (postId, tagIndex) => {
      const updatedPosts = blogPosts.map((post) => {
        if (post.id === postId) {
          const updatedTags = post.tags.filter((_, i) => i !== tagIndex);
          return { ...post, tags: updatedTags };
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };


    const addTag = (postId) => {
      const updatedPosts = blogPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, tags: [...post.tags, ""] };
        }
        return post;
      });
      setBlogPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    };
    
    



  //use Effect

  useEffect(() => {
    localStorage.setItem("ServicesGalery", JSON.stringify(servicesGalery));
  }, [servicesGalery]);

  if (dark) {
    document.body.style.background = "black";
  } else {
    document.body.style.background = "white";
  }

  if (!admin) {
    window.location.href = "/admin/login";
  }
  console.log(aboutData, "=>abotu data");

  return (
    <div
      className="dashboard"
      style={
        dark
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <div
        className="dashMenu"
        style={
          dark
            ? { backgroundColor: "#333", color: "white" }
            : { backgroundColor: "#f4f4f4", color: "black" }
        }
      >
        <img src={LG[0].image} alt="logo" />
        <h1>HELLO ADMIN</h1>
      </div>
      <div
        className="sideMenu"
        style={
          dark ? { backgroundColor: "#333" } : { backgroundColor: "#f4f4f4" }
        }
      >
        <h1
          onClick={() => {
            setSelectedMenu("Dashboard");
            setData("dash");
          }}
        >
          Dashboard
        </h1>
        <div className="group">
          <h1
            onClick={() => {
              setSelectedMenu("Posts");
              setData("posts");
            }}
          >
            Posts
          </h1>
          <h1
            onClick={() => {
              setSelectedMenu("Pages");
              setData("pages");
            }}
          >
            Pages
          </h1>
          <h1
            onClick={() => {
              setSelectedMenu("Style");
              setData("style");
            }}
          >
            Style
          </h1>
          <h1
            onClick={() => {
              setSelectedMenu("Feedback");
              setData("feedback");
            }}
          >
            Feedback
          </h1>
        </div>
        <div className="group">
          <h1
            onClick={() => {
              setSelectedMenu("Settings");
              setData("settings");
            }}
          >
            Settings
          </h1>
          <h1 onClick={() => setSelectedMenu("Collapse Menu")}>
            Collapse Menu
          </h1>
        </div>
      </div>

      <div className="main">
        <h2 className="mainTitle">{selectedMenu}</h2>

        {data === "dash" && (
          <div>
            <div>
              <h2 className="elementTitle">Site Info</h2>
              <div
                className="tableWrapper"
                style={
                  dark
                    ? {
                        backgroundColor: "#333",
                        color: "white",
                        borderColor: "black",
                      }
                    : {
                        backgroundColor: "#f4f4f4",
                        color: "black",
                        borderColor: "white",
                      }
                }
              >
                <table
                  style={
                    dark
                      ? {
                          backgroundColor: "#333",
                          color: "white",
                          borderColor: "black",
                        }
                      : {
                          backgroundColor: "#f4f4f4",
                          color: "black",
                          borderColor: "white",
                        }
                  }
                >
                  <thead>
                    <tr>
                      <th colSpan="2">Site Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>URL:</td>
                      <td>Project Name</td>
                    </tr>
                    <tr>
                      <td>Coded in</td>
                      <td>React</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="elementTitle">Last Upload</h2>
              <div
                className="tableWrapper"
                style={
                  dark
                    ? {
                        backgroundColor: "#333",
                        color: "white",
                        borderColor: "black",
                      }
                    : {
                        backgroundColor: "#f4f4f4",
                        color: "black",
                        borderColor: "white",
                      }
                }
              >
                <table
                  style={
                    dark
                      ? {
                          backgroundColor: "#333",
                          color: "white",
                          borderColor: "black",
                        }
                      : {
                          backgroundColor: "#f4f4f4",
                          color: "black",
                          borderColor: "white",
                        }
                  }
                >
                  <thead>
                    <tr>
                      <th colSpan="2">Last Upload</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Date:</td>
                      <td>{new Date().toLocaleDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {data === "settings" && (
          <div className="settings">
            {dark ? (
              <button
                type="button"
                onClick={() => {
                  setDark(false);
                }}
              >
                Light Mode
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setDark(true);
                }}
              >
                Dark Mode
              </button>
            )}
          </div>
        )}

        {data === "style" && (
          <div className="style">
            <div className="row">
              <button type="button" onClick={() => setStyle("General")}>
                General
              </button>
              <button
                onClick={() => {
                  setSelectedMenu("Header Style");
                  setStyle("header");
                }}
              >
                Header Style
              </button>
            </div>
            {style === "General" && (
              <div className="general"
              style={
                dark
                  ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
                  : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
              }>
                <div className="bodyGeneral stylesSpan">
                  <h1>Body</h1>
                  <div>
                    <h3>Font Family</h3>
                    <input
                      type="text"
                      name="change"
                      value={bodyStyle.fontFamily}
                      onChange={(e) => {
                        const newStyle = { ...bodyStyle };
                        newStyle.fontFamily = e.target.value;
                        setBodyStyle(newStyle);
                        localStorage.setItem(
                          "BodyStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                  <div>
                    <h3>Text Align</h3>
                    <input
                      type="text"
                      name="change"
                      value={bodyStyle.textAlign}
                      onChange={(e) => {
                        const newStyle = { ...bodyStyle };
                        newStyle.textAlign = e.target.value;
                        setBodyStyle(newStyle);
                        localStorage.setItem(
                          "BodyStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                </div>

                <div className="menuGeneral stylesSpan">
                  <h1>Menu</h1>
                  <div>
                    <h3>Height</h3>
                    <input
                      type="text"
                      name="change"
                      value={menuStyle.height}
                      onChange={(e) => {
                        const newStyle = { ...menuStyle };
                        newStyle.height = e.target.value;
                        setMenuStyle(newStyle);
                        localStorage.setItem(
                          "MenuStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                  <div>
                    <h3>Justify Content</h3>
                    <input
                      type="text"
                      name="change"
                      value={menuStyle.justifyContent}
                      onChange={(e) => {
                        const newStyle = { ...menuStyle };
                        newStyle.justifyContent = e.target.value;
                        setMenuStyle(newStyle);
                        localStorage.setItem(
                          "MenuStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                  <div>
                    <h3>Padding</h3>
                    <input
                      type="text"
                      name="change"
                      value={menuStyle.padding}
                      onChange={(e) => {
                        const newStyle = { ...menuStyle };
                        newStyle.padding = e.target.value;
                        setMenuStyle(newStyle);
                        localStorage.setItem(
                          "MenuStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                </div>

                <div className="bannerGeneral stylesSpan">
                  <h1>Banner</h1>
                  <div>
                    <h3>Height</h3>
                    <input
                      type="text"
                      name="change"
                      value={bannerStyle.height}
                      onChange={(e) => {
                        const newStyle = { ...bannerStyle };
                        newStyle.height = e.target.value;
                        setBannerStyle(newStyle);
                        localStorage.setItem(
                          "BannerStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                  <div>
                    <h3>Height</h3>
                    <input
                      type="text"
                      name="change"
                      value={bannerStyle.height}
                      onChange={(e) => {
                        const newStyle = { ...bannerStyle };
                        newStyle.height = e.target.value;
                        setBannerStyle(newStyle);
                        localStorage.setItem(
                          "BannerStyle",
                          JSON.stringify(newStyle)
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {style === "Menu" && <div></div>}
            {style === "header" && (
              <div className="customization-section">
                <h1>Header Customization</h1>
                <p>
                  Choose from 9 different header styles to customize your
                  website's appearance
                </p>
                <HeaderCustomizer />
              </div>
            )}
          </div>
        )}

        {data === "pages" && (
          <>
            <div className="row">
              <button type="button" onClick={() => setPage("Home")}>
                Home
              </button>
              <button type="button" onClick={() => setPage("About")}>
                About
              </button>
              <button type="button" onClick={() => setPage("Services")}>
                Services
              </button>
            </div>

                {page === "Home" && (
                  <div>
                    <h1>Home Page</h1>
                    {homeBanner &&
                      homeBanner.map((element, index) => (
                        <div className="homeBanner" key={index}
                        style={
                          dark
                            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
                            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
                        }
                        >
                          <h1>Banner</h1>
                          <input 
                            type="text"
                            name="change"
                            value={element.imageBack}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].imageBack = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
              
                          <input 
                            type="text"
                            name="change"
                            value={element.bannerHead}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerHead = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                          
                          <input 
                            type="text"
                            name="change"
                            value={element.bannerDesc}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerDesc = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                          
                          <input 
                            type="text"
                            name="change"
                            value={element.bannerButton1}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerButton1 = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                          
                          <input 
                            type="text"
                            name="change"
                            value={element.bannerButton2}
                            onChange={(e) => {
                              const newBanner = [...homeBanner];
                              newBanner[index].bannerButton2 = e.target.value;
                              setHomeBanner(newBanner);  
                              localStorage.setItem("HomeBanner", JSON.stringify(newBanner));
                            }}
                          />
                        </div>
                      ))}
              
                    {homeAbout &&
                      homeAbout.map((element, index) => (
                        <div className="homeAbout" key={index}
                        style={
                          dark
                            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
                            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
                        }>
                          <h1>About</h1>
                          <input 
                            type="text"
                            name="change"
                            value={element.aboutImage}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].aboutImage = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                          <input 
                            type="text"
                            name="change"
                            value={element.aboutHead}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].aboutHead = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                          <input 
                            type="text"
                            name="change"
                            value={element.aboutDesc}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].aboutDesc = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                          
                          {element.aboutList.map((serie, i) => (
                            <div className='aboutList' key={i}>
                              <input 
                                type="text"
                                name="change"
                                value={serie.image}
                                onChange={(e) => {
                                  const newAbout = [...homeAbout];
                                  newAbout[index].aboutList[i].image = e.target.value;
                                  setHomeAbout(newAbout);  
                                  localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                                }}
                              />
                              <input 
                                type="text"
                                name="change"
                                value={serie.comp}
                                onChange={(e) => {
                                  const newAbout = [...homeAbout];
                                  newAbout[index].aboutList[i].comp = e.target.value;
                                  setHomeAbout(newAbout);  
                                  localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                                }}
                              />
                            </div>
                          ))}
                          
                          <input 
                            type="text"
                            name="change"
                            value={element.buttonDesc}
                            onChange={(e) => {
                              const newAbout = [...homeAbout];
                              newAbout[index].buttonDesc = e.target.value;
                              setHomeAbout(newAbout);  
                              localStorage.setItem("HomeAbout", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                      ))}
              
                    {homeServices &&
                      homeServices.map((element, index) => (
                        <div className='homeServices' key={index}
                        style={
                          dark
                            ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
                            : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
                        }>
                          <h1>Services</h1>
                          
                          
                          {element.card.map((serie, i) => (
                            <div key={i}>
                              <input 
                                type='text' 
                                name='text' 
                                value={serie.image}
                                onChange={(e) => {
                                  const newServices = [...homeServices];
                                  newServices[index].card[i].image = e.target.value;
                                  setHomeServices(newServices);
                                  localStorage.setItem("HomeServices", JSON.stringify(newServices));
                                }} 
                              />
                              <input 
                                type='text' 
                                name='text' 
                                value={serie.comp}
                                onChange={(e) => {
                                  const newServices = [...homeServices];
                                  newServices[index].card[i].comp = e.target.value;
                                  setHomeServices(newServices);
                                  localStorage.setItem("HomeServices", JSON.stringify(newServices));
                                }} 
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>
                )}
                {page === "About" && (
                  <div>
                    <h1>About Page</h1>
                    {aboutData.map((element, index) => (
                      <div
                        className='aboutData'
                        key={index}
                        style={
                          dark
                            ? { backgroundColor: "#333", color: "white", borderColor: "black" }
                            : { backgroundColor: "#f4f4f4", color: "black", borderColor: "white" }
                        }
                      >
                        <div className='aboutbanner'>
                          <h2>Banner</h2>
                          <input
                            type='text'
                            value={element.banner.image}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].banner.image = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.banner.heading}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].banner.heading = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.banner.subheading}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].banner.subheading = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                        <div className='aboutvision'>
                          <h2>Vision</h2>
                          <input
                            type='text'
                            value={element.vision.title}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].vision.title = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.vision.description}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].vision.description = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                        <div className='aboutservices'>
                          <h2>Services</h2>
                          <input
                            type='text'
                            value={element.services.title}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].services.title = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          {
                            element.services.list.map((item, i) => (
                              <input
                            type='text'
                            value={item}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].item = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                            ))
                          }
                          <input
                            type='text'
                            value={element.services.image}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].services.image = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                        <div className='aboutreasons'>
                          <h2>Reasons</h2>
                          <input
                            type='text'
                            value={element.reasons.title}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].reasons.title = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          {element.reasons.list.map((item, i) => (
                              <input
                            type='text'
                            value={item}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].item = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                            ))}
                          <input
                            type='text'
                            value={element.reasons.image}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].reasons.image = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                        <div className='aboutcommitment'>
                          <h2>Commitment</h2>
                          <input
                            type='text'
                            value={element.commitment.title}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].commitment.title = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.commitment.description}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].commitment.description = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          
                        </div>
                        <div className='aboutcta'>
                          <h2>Cta</h2>
                          <input
                            type='text'
                            value={element.cta.title}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].cta.title = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.cta.description}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].cta.description = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.cta.buttonText}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].cta.buttonText = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                          <input
                            type='text'
                            value={element.cta.buttonLink}
                            onChange={(e) => {
                              const newAbout = [...aboutData];
                              newAbout[index].cta.buttonLink = e.target.value;
                              setAboutData(newAbout);
                              localStorage.setItem("aboutData", JSON.stringify(newAbout));
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                )}


                {page === "Services" && (
                  <>
                    <h1>Services Page</h1>
                    {servicesBanner && (
                        <>
                        {servicesBanner.map((element,index)=>{
                          return <div className="servicesBanner"
                          style={
                            dark
                              ? {
                                  backgroundColor: "#333",
                                  color: "white",
                                  borderColor: "black",
                                }
                              : {
                                  backgroundColor: "#f4f4f4",
                                  color: "black",
                                  borderColor: "white",
                                }
                          }
                        >
                          <h1>Banner</h1>
                          <input
                            key={index}
                            type="text"
                            name="change"
                            value={element.imageBack}
                            onChange={(e) => {
                              const newServicesBanner = [...servicesBanner];
                              newServicesBanner[index].imageBack =
                                e.target.value;
                              setServicesBanner(newServicesBanner);
                              localStorage.setItem(
                                "ServicesBanner",
                                JSON.stringify(newServicesBanner)
                              );
                            }}
                          />
                          <input
                            key={index}
                            type="text"
                            name="change"
                            value={element.bannerHead}
                            onChange={(e) => {
                              const newServicesBanner = [...servicesBanner];
                              newServicesBanner[index].bannerHead =
                                e.target.value;
                              setServicesBanner(newServicesBanner);
                              localStorage.setItem(
                                "ServicesBanner",
                                JSON.stringify(newServicesBanner)
                              );
                            }}
                          />
                          <input
                            key={index}
                            type="text"
                            name="change"
                            value={element.bannerButton1}
                            onChange={(e) => {
                              const newServicesBanner = [...servicesBanner];
                              newServicesBanner[index].bannerButton1 =
                                e.target.value;
                              setServicesBanner(newServicesBanner);
                              localStorage.setItem("ServicesBanner", JSON.stringify(newServicesBanner))
                            }}/>
                          </div>
                        })
                        }
                      {<div className='servicesGalery'
                      style={
                        dark
                          ? {
                              backgroundColor: "#333",
                              color: "white",
                              borderColor: "black",
                            }
                          : {
                              backgroundColor: "#f4f4f4",
                              color: "black",
                              borderColor: "white",
                            }
                      }
                    >
                      <h1>Galery</h1>
                      {servicesGalery.map((element,index)=>{
                        return <div>
                          <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={element.title} 
                            onChange={(e)=>{
                              const newServicesGalery = [...servicesGalery];
                              newServicesGalery[index].title = e.target.value;
                              setServicesGalery(newServicesGalery);
                              localStorage.setItem("ServicesGalery", JSON.stringify(newServicesGalery))
                            }}/>
                            <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={element.description} 
                            onChange={(e)=>{
                              const newServicesGalery = [...servicesGalery];
                              newServicesGalery[index].description = e.target.value;
                              setServicesGalery(newServicesGalery);
                              localStorage.setItem("ServicesGalery", JSON.stringify(newServicesGalery))
                            }}/>
                            <input 
                            key={index}
                            type='text' 
                            name='change' 
                            value={element.icon} 
                            onChange={(e)=>{
                              const newServicesGalery = [...servicesGalery];
                              newServicesGalery[index].icon = e.target.value;
                              setServicesGalery(newServicesGalery);
                              localStorage.setItem("ServicesGalery", JSON.stringify(newServicesGalery))
                            }}/>
                        </div>
                        
                      })}
                      </div> }

                      </>
                      
                    )}

                    
                  </>
                )}
                
              </>
        )}

        {data === "feedback" && (
          <div className="feedback">
            {feedback.size > 0 ? (
              feedback.map((element, index) => (
                <div className="card" key={index}>
                  <h1>{element.name}</h1>
                  <h2>{element.subject}</h2>
                  <div className="row">
                    <h2>{element.phone}</h2>
                    <h2>{element.email}</h2>
                  </div>
                  <p>{element.message}</p>
                </div>
              ))
            ) : (
              <p className="noFeedback">No one said anything</p>
            )}
          </div>
        )}

        {data === "posts" && (
          <div className="blog-grid row">
          {blogPosts.map((post, index) => (
            <div className="card" key={post.id}
            style={
              dark
                ? { backgroundColor: "#333", color: "white" ,borderColor:"black"}
                : { backgroundColor: "#f4f4f4", color: "black", borderColor:"white"}
            }>
              {!post.isConfigOpen ? (
                <>
                  <img src={post.image} alt={post.title} />
                  <h2>{post.title}</h2>
                  <p><strong>Date:</strong> {post.date}</p>
                  <p><strong>Category:</strong> {post.category}</p>
                  <p>{post.description}</p>
                  <div className="tags">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="tag">#{tag}</span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="change"
                    value={post.title}
                    onChange={(e) => handleInputChange(e, post.id, "title")}
                  />
    
                  <label>Description:</label>
                  <input
                    type="text"
                    name="change"
                    value={post.description}
                    onChange={(e) => handleInputChange(e, post.id, "description")}
                  />
    
                  <label>Image URL:</label>
                  <input
                    type="text"
                    name="change"
                    value={post.image}
                    onChange={(e) => handleInputChange(e, post.id, "image")}
                  />

                  <label>Category:</label>
                  <input
                    type="text"
                    name="change"
                    value={post.category}
                    onChange={(e) => handleInputChange(e, post.id, "image")}
                  />
                  <h3>Tags</h3>
                  <div>
                    {post.tags.length > 0 ? (
                      post.tags.map((tag, i) => (
                        <div key={i}>
                          <input
                            type="text"
                            name="change"
                            value={tag}
                            onChange={(e) => handleTagChange(e, post.id, i)}
                          />
                          <button onClick={() => removeTag(post.id, i)}>Remove</button>
                        </div>
                      ))
                    ) : (
                      <p>No tags yet.</p>
                    )}

                    <button onClick={() => addTag(post.id)}>Add Tag</button>
                    <br/>
                    <label>Date:</label>
                      <input
                        type="text"
                        name="change"
                        value={post.date}
                        onChange={(e) => handleInputChange(e, post.id, "image")}
                      />
                  </div>
                  </>
                )}
      
                <button
                  onClick={() => toggleConfig(post.id)}
                  style={{ marginTop: "10px", cursor: "pointer" }}
                >
                  {post.isConfigOpen ? "Close Config" : "Config"}
                </button>


                
            </div>
          ))}
        <button className='addpost'
        onClick={() => {
          const newPost = {
            id: blogPosts.length + 1,
            title: "New Post",
            description: "Description",
            image: "https://img.freepik.com/free-photo/office-desk-with-laptop_23-2148821886.jpg",
            date: "2023-10-01",
            category: "Category",
            tags: [],
            isConfigOpen: false,
          };
          setBlogPosts([...blogPosts, newPost]);
          localStorage.setItem("blogPosts", JSON.stringify([...blogPosts, newPost]));
        }}>
          Add Post
        </button>
                
        </div>
        
        )}
        
      </div>
    </div>
  );
}

export default Dashboard;
