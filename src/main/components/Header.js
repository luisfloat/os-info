const { Navbar, Container, Nav } = require("react-bootstrap");
const { e } = require("../assets/utils.js");

const template = () => {
    return e("div", null,
        e(Navbar, { bg: "dark", variant: "dark", expand: "lg", fixed: "top" }, 
            e(Container, {},
                e(Navbar.Brand, { href: "#home" }, "OS Info"),
                e(Navbar.Toggle, { "aria-controls": "main-navbar-nav" }),
                e(Navbar.Collapse, { id: "main-navbar-nav", variant: "primary" },
                    e(Nav, { className: "me-auto" }),
                ),
            ),
        ),
    );
};

function Header() {
    return template();
}

module.exports = Header;