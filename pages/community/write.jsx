import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";

export default function Write() {
  return (
    <Layout canGoBack title="Write Post">
      <form className="space-y-4 p-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
}
