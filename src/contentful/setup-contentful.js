/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import * as contentful from "contentful";

export function useContentful() {
  const [activities, setActivities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: "22r1wcscd69i",
    accessToken: "mh_TMH1K1yL1bBn-uycdqpgIYBds-PqS_XgcpMo8Fz0",
  });

  useEffect(() => {
    client
      .getEntries({ content_type: "activity", order: "-fields.date" })
      .then((res) => {
        setActivities(res.items);
      })
      .catch((e) => setError(...error, e.message));

    client
      .getEntries({ content_type: "category" })
      .then((res) => {
        setCategories(res.items);
      })
      .catch((e) => setError(...error, e.message));

    setLoading(false);
  }, []);

  return { activities, categories, loading, error };
}
